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
arms = t[["id", "treatment"]].copy()
arms["arm"] = arms.groupby("id").cumcount() + 1
merged = s.merge(arms, on="id", how="left", validate="one_to_many")
merged["treatment"] = merged["treatment"].fillna("")
merged["arm"] = merged["arm"].fillna(1).astype(int)
assert merged["id"].isin(t["id"]).sum() == len(t), "every treatment arm must survive the merge"

records, long_rows = [], []
for _, r in merged.sort_values(["id", "arm"]).iterrows():
    program = r.programname.strip() or "Unnamed programme"
    treat = r.treatment.strip() or program
    codes = country_codes(r.countrycode.strip())
    url = r.studyregistrationlink.strip()
    url = url if url.lower().startswith("http") else ""
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
                "sample": "Causally identified" if sample == "causal" else "Weakly identified",
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
