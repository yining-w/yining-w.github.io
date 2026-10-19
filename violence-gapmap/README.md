# Evidence Map for What We Know and Don't Know to Reduce School Related Violence

## Purpose
Opens with a filter pop-up (the same controls then sit above the chart). Lets a reader pick their country, choose comparators (default, all, or custom by income group, region and individual country), filter by type of violence and perpetrator, and see every matching intervention arm as a bubble, clustered by grade, urban/rural setting, or both.

## Files and architecture
- `index-force.html` – the tool, using d3-force clustering (the earlier grid layout can be rebuilt by setting `LAYOUT` to 'grid' in the template). It is the built, self-contained interactive (vanilla JS + D3 7.9.0 from jsDelivr, pinned with SRI). Data is inlined.
- `src/index.template.html` – source; `/*__DATA__*/` is replaced at build time.
- `scripts/prepare_data.py` – merge + cleaning (Stata files + World Bank country list → `data/`).
- `scripts/build_html.py` – inlines `data/tool-data.json` into `index.html`.
- `data/interventions_long.csv` – cleaned long file: one row per arm × grade × urban/rural value.
- `data/wb-countries.json` – World Bank API country metadata snapshot (api.worldbank.org/v2/country), pulled 2026-10-08.

Why D3 and not React/Vue: the only custom piece is the clustered bubble layout with animated transitions between groupings, which is a D3 data-join job. Filters are a handful of native controls driven by one state object, so a component framework adds a build step without benefit (and the CGD standard requires comms approval for React/Vite).

## Regenerating
```
python3 scripts/prepare_data.py studylevel.dta treatmentlevel.dta data/wb-countries.json data
python3 scripts/build_html.py .
```

## Data decisions (recorded so they are not "fixed" later)
- Merge: studies with arms in `treatmentlevel.dta` (41 studies) expand to one row per arm (50); the other 72 studies keep one row with treatment = programme name → 122 arms, then ids 4 (Right to Play) and 119 (Anti-Bullying Law) are collapsed to one row each, labelled with the programme name only → 120 interventions (48 causally identified, 72 not as strongly identified). Only `treatment` is taken from treatmentlevel; all other fields are study-level.
- Grade (`baselineage`): Kindergarten to Primary → K + Primary; Lower and Upper Secondary → both; Primary and Secondary → Primary + Lower + Upper; Kindergarten to Lower Secondary → K + Primary + Lower.
- Urban/rural: urban, rural, both/Both → both, not sure → not clear, suburban / semi-rural / other → other.
- The multi-country study (id 49: Belgium, Cyprus, England, Greece, Netherlands) is one bubble that matches any of its five countries.
- Income group and region use the World Bank classification for FY2026–27 (this moves Pakistan to MEA and El Salvador and Vietnam to UMC versus the review file).
- Author link: `studyregistrationlink` where it is a URL, otherwise a Google Scholar search on the study title. Corrections live in `data/link_overrides.csv` (study_id,url,note) and are applied by `prepare_data.py`. As of 15 Oct 2026 it gives every study a link: 104 DOIs found by Crossref title+author matching and confirmed as registered, the CGD working paper on RePEc, and 7 links supplied by Yi Ning (16 Oct). Study 11 (Gutierrez et al 2025) is marked FORTHCOMING, so the tool shows the author as text with "forthcoming" and no link; `data/links_review.csv` lists every study's link, its type and its last check.
- PLACEHOLDER: missing `focus_primary` (68 studies, almost all "Other") is shown as Knowledge and Norms, flagged `focusPlaceholder` / `focus_primary_placeholder` and labelled as a placeholder in the detail pop-up. Remove the fallback in `prepare_data.py` once coded.
- Violence filter: with all boxes ticked every row shows; otherwise a row needs at least one ticked type and one ticked perpetrator. Perpetrator options are Teacher, Peer and Not explicitly identified (`perpetrator_any`). `violence_sex_teachers/peers` count as sexual.
- Evidence strength: causally identified (Main sample) = solid circle; weakly identified (Other) = circle with a faint fill (18% opacity) and diagonal stripes in the same colour.
- High contrast (moon button): dark theme with brighter focus colours; it is a display preference, so Reset filters does not change it.
- Force version: each income sub-group is packed with d3.forceSimulation (forceX/forceY + forceCollide), causally identified pulled left and weakly identified right; the simulation runs to rest before drawing so positions are stable, then bubbles animate to them.
- Fonts: headers (title, dialog/tooltip titles, control labels, cluster titles) and all button/checkbox option labels use the CGD sans (Sofia Pro); all other text uses Bitter from Google Fonts, falling back to Georgia. Text sizes sit about 1px above the CGD house scale; the source note stays at 12px, in italics.
- "Display evidence from comparable contexts" modes: Default comparators (same region + same/adjacent income), Same region (any income), Same + adjacent income levels (any region), All, Custom (starts from the rule in use).
- Legend: once a country is selected, a top row shows the country (when it has bubbles) and the comparator countries on the chart.
- Sample labels: Causally identified (Main) and Not as strongly identified (Other).
- Source line uses the Chicago citation for Evans, Smarrelli and Wong (2026), CGD Working Paper; add the paper number/URL once assigned.
- Selection panels and the chart have no outline; the chart panel has a minimum height (560px, 420px on phones).
- Study corrections: `data/study_corrections.csv` (study_id,author_label,title,note) overrides the review's author label and/or title for 6 studies (Jin et al 2017, was Xu et al 2015; Kim and Kang 2016, was Kim et al 2020; Palladino et al 2012 title; and the 'Trained Teachers' find-and-replace slip in ids 39, 52, 75, 94). The prep script fails if 'Trained Teachers' reappears in any title.
- Income-group row labels are plain text (no hover); only bubbles have pop-ups. Hover shows a bubble's pop-up (title, author link, country, income, grades, violence, perpetrator); clicking or pressing Enter pins it in place so the link can be used; clicking it again, clicking elsewhere or Escape releases it. There is no separate detail dialog.
- Custom region filter has a Global option that ticks every region; unticking it returns to the selected country's region.
- Group by sits in its own panel and is not part of the opening filter pop-up.
- The selected country's legend key only appears when that country has bubbles on the chart. Within each cluster, bubbles sit in income sub-blocks (low → high) and are sorted causally identified first.
- Custom comparators: the country list shows only countries with studies that match the ticked income groups and regions; unticked countries are stored as exclusions.
- In the urban/rural view each arm appears once; in grade and both views an arm appears once per grade it covers.

## Open items
- Source line wording needs confirming with comms.
- Test inside the production parent page (iframe resize + analytics).
