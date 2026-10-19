"""Prepare data for the school-violence evidence explorer.

Inputs : studylevel.dta, treatmentlevel.dta, World Bank country API dump (countries.json)
Outputs: data/interventions_long.csv  (one row per arm x grade x setting value, as requested)
         data/tool-data.json          (compact payload embedded in index.html)

Usage: python3 prepare_data.py STUDY_DTA TREATMENT_DTA WB_JSON OUT_DIR
"""
import json
import sys
from pathlib import Path

import pandas as pd

study_path, treat_path, wb_path, out_dir = sys.argv[1:5]
out = Path(out_dir)
out.mkdir(parents=True, exist_ok=True)

s = pd.read_stata(study_path, convert_categoricals=False)
t = pd.read_stata(treat_path, convert_categoricals=False)

# Study-level corrections: data/study_corrections.csv (study_id,author_label,title,note).
# A blank cell leaves that field as it is in studylevel.dta.
corr_path = out / "study_corrections.csv"
if corr_path.exists():
    corr = pd.read_csv(corr_path, dtype=str).fillna("")
    for _, c in corr.iterrows():
        mask = s["id"] == int(c.study_id)
        assert mask.sum() == 1, f"study_corrections.csv: unknown study id {c.study_id}"
        if c.author_label.strip():
            s.loc[mask, "author_lab"] = c.author_label.strip()
        if c.title.strip():
            s.loc[mask, "study"] = c.title.strip()
assert not s["study"].str.contains("Trained Teacher", case=False).any(), "'Trained Teachers' slip still in a title"

# ---------------------------------------------------------------- World Bank
wb_raw = json.load(open(wb_path))[1]
wb = {}
for c in wb_raw:
    if c["region"]["id"] == "NA":          # aggregates
        continue
    wb[c["id"]] = {
        "code": c["id"],
        "name": c["name"].strip(),
        "region": c["region"]["id"],
        "income": c["incomeLevel"]["id"],
    }
REGION_NAMES = {
    "EAS": "East Asia and Pacific",
    "ECS": "Europe and Central Asia",
    "LCN": "Latin America and Caribbean",
    "MEA": "Middle East, North Africa, Afghanistan and Pakistan",
    "NAC": "North America",
    "SAS": "South Asia",
    "SSF": "Sub-Saharan Africa",
}

# Multi-country study: map free-text names to ISO3 codes
MULTI = {"Belgium": "BEL", "Cyprus": "CYP", "England": "GBR", "Greece": "GRC", "Netherlands": "NLD"}


def country_codes(code):
    if code in wb:
        return [code]
    parts = [p.strip() for p in code.split(";")]
    codes = [MULTI[p] for p in parts if p in MULTI]
    assert len(codes) == len(parts), f"Unmapped country entry: {code}"
    return codes


# ---------------------------------------------------------------- cleaning maps
GRADE_MAP = {
    "Kindergarten": ["Kindergarten"],
    "Primary": ["Primary"],
    "Lower Secondary": ["Lower Secondary"],
    "Upper Secondary": ["Upper Secondary"],
    "Lower and Upper Secondary": ["Lower Secondary", "Upper Secondary"],
    "Kindergarten to Primary": ["Kindergarten", "Primary"],
    "Kindergarten to Lower Secondary": ["Kindergarten", "Primary", "Lower Secondary"],
    "Primary and Secondary": ["Primary", "Lower Secondary", "Upper Secondary"],
}
SETTING_MAP = {
    "urban": "urban", "rural": "rural", "both": "both",
    "not sure": "not clear", "": "not clear",
    "suburban": "other", "semi-rural": "other", "other": "other",
}


def clean_setting(v):
    v = (v or "").strip().lower()
    assert v in SETTING_MAP, f"Unmapped urban/rural value: {v!r}"
    return [SETTING_MAP[v]]


def flag(v):
    return bool(v == 1)


# ---------------------------------------------------------------- merge
# Rows map to treatmentlevel arms where a study has them; studies absent from
# treatmentlevel (Other_Studies) keep one row with treatment = programme name.
# Only the treatment name is taken from treatmentlevel; everything else is study-level.
# Studies whose "arms" are really one intervention (e.g. Boys*/Girls* subgroups): keep a single
# row and show the programme name only, no treatment label.
SINGLE_ARM_IDS = {4, 119}   # Right to Play (Karmaliani et al 2020); Anti-Bullying Law (Rees et al 2022)
arms = t[["id", "treatment"]].copy()
dedup = arms["id"].isin(SINGLE_ARM_IDS)
arms = pd.concat([arms[~dedup], arms[dedup].drop_duplicates("id").assign(treatment="")]).sort_index()
arms["arm"] = arms.groupby("id").cumcount() + 1
merged = s.merge(arms, on="id", how="left", validate="one_to_many")
merged["treatment"] = merged["treatment"].fillna("")
merged["arm"] = merged["arm"].fillna(1).astype(int)
assert merged["id"].isin(t["id"]).sum() == len(t) - sum(t["id"].isin(SINGLE_ARM_IDS)) + len(SINGLE_ARM_IDS), \
    "every treatment arm (after de-duplication) must survive the merge"
assert all((merged["id"] == i).sum() == 1 for i in SINGLE_ARM_IDS)

# Link corrections: data/link_overrides.csv (study_id,url) replaces the study's link.
# A blank url there means "no direct link" (falls back to a Google Scholar search in the tool).
overrides_path = out / "link_overrides.csv"
LINK_OVERRIDES = {}
if overrides_path.exists():
    ov = pd.read_csv(overrides_path, dtype=str).fillna("")
    LINK_OVERRIDES = {int(i): u.strip() for i, u in zip(ov["study_id"], ov["url"])}
    unknown = set(LINK_OVERRIDES) - set(s["id"].astype(int))
    assert not unknown, f"link_overrides.csv has unknown study ids: {sorted(unknown)}"

records, long_rows = [], []
for _, r in merged.sort_values(["id", "arm"]).iterrows():
    program = r.programname.strip() or "Unnamed programme"
    treat = r.treatment.strip() or program
    codes = country_codes(r.countrycode.strip())
    url = r.studyregistrationlink.strip()
    url = url if url.lower().startswith("http") else ""
    if int(r.id) in LINK_OVERRIDES:
        url = LINK_OVERRIDES[int(r.id)]
    # "FORTHCOMING" in link_overrides.csv: no link yet; the tool shows the author as text, marked forthcoming.
    forthcoming = url.upper() == "FORTHCOMING"
    if forthcoming:
        url = ""
    grades = GRADE_MAP[r.baselineage.strip()]
    settings = clean_setting(r.urbanorrural)
    # PLACEHOLDER: uncoded primary focus is shown as Knowledge and Norms until coded.
    focus_placeholder = not r.focus_primary.strip()
    focus = r.focus_primary.strip() or "Knowledge and Norms"
    sample = "causal" if r["sample"] == "Main" else "weak"
    rec = {
        "key": f"{int(r.id)}-{int(r.arm)}",
        "id": int(r.id),
        "program": program,
        "treatment": treat,
        "author": r.author_lab.strip(),
        "title": r.study.strip(),
        "url": url,
        "forthcoming": forthcoming,
        "countries": codes,
        "countryLabel": "; ".join(wb[c]["name"] for c in codes),
        "income": wb[codes[0]]["income"],     # current WB classification
        "region": wb[codes[0]]["region"],
        "grades": grades,
        "setting": settings[0],
        "focus": focus,
        "focusPlaceholder": focus_placeholder,
        "sample": sample,
        "v": {  # violence type
            "sexual": flag(r.violence_sexual) or flag(r.violence_sex_teachers) or flag(r.violence_sex_peers),
            "emotional": flag(r.violence_emotional),
            "physical": flag(r.violence_physical),
        },
        "p": {  # perpetrator
            "teacher": flag(r.perpetrator_teacher),
            "peer": flag(r.perpetrator_peer),
            "any": flag(r.perpetrator_any),
        },
    }
    records.append(rec)
    for g in grades:
        for st in settings:
            long_rows.append({
                "study_id": rec["id"], "arm_key": rec["key"], "url": url,
                "programname": program, "treatment": treat, "author": rec["author"],
                "countrycode": ";".join(codes), "country": rec["countryLabel"],
                "incomelevel": rec["income"], "region": rec["region"],
                "violence_sexual": int(rec["v"]["sexual"]),
                "violence_emotional": int(rec["v"]["emotional"]),
                "violence_physical": int(rec["v"]["physical"]),
                "perpetrator_teacher": int(rec["p"]["teacher"]),
                "perpetrator_peer": int(rec["p"]["peer"]),
                "perpetrator_any": int(rec["p"]["any"]),
                "grade": g, "urban_rural": st,
                "sample": "Causally identified" if sample == "causal" else "Not as strongly identified",
                "focus_primary": focus,
                "focus_primary_placeholder": int(focus_placeholder),
            })

pd.DataFrame(long_rows).to_csv(out / "interventions_long.csv", index=False, encoding="utf-8-sig")

countries = sorted(wb.values(), key=lambda c: c["name"])
payload = {"rows": records, "countries": countries, "regions": REGION_NAMES}
(out / "tool-data.json").write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")))

print(f"studies={s.id.nunique()} arms={len(records)} long_rows={len(long_rows)} countries={len(countries)}")
print(pd.DataFrame(long_rows)[["grade"]].value_counts().to_string())
print(pd.DataFrame(long_rows)[["urban_rural"]].value_counts().to_string())
