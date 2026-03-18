# Global Education Research Skill

A multi-pass, source-weighted research synthesis tool for global education questions.
Prioritizes grey literature from multilateral and evidence institutions over general web results.
Language and framing follows the global education field's conventions.

Based on the parallel sub-agent review structure from [OpenAIReview](https://openaireview.github.io/blog.html).

## Usage

```
/global-edu-research <research question>
```

Examples:
- `/global-edu-research What interventions improve foundational literacy in Sub-Saharan Africa?`
- `/global-edu-research How does conflict affect girls' school participation in MENA?`
- `/global-edu-research What does the evidence say about mother tongue instruction in LMICs?`
- `/global-edu-research What are effective models for accelerated education for over-age learners?`

---

## How It Works

### Step 1 — Load Reference Files

Before doing anything else, read both companion files from the same directory as this skill:
- `edu-sources.md` — trusted source list with confidence tiers
- `edu-terminology.md` — preferred language, framing conventions, and evidence hierarchy

Internalize both files completely. All subsequent steps must apply them.

### Step 2 — Parse the Research Question

Analyze the research question and extract:

1. **Core topic** — the primary education issue or intervention
2. **Population(s)** — who this concerns (age group, gender, displacement status, etc.)
3. **Geography** — region, country, or context if specified (or note if global)
4. **Evidence type sought** — effectiveness evidence, policy analysis, situation data, or conceptual framing
5. **Relevant SDG 4 sub-targets** — identify which SDG 4 targets the question relates to
6. **Relevant source tiers** — which Tier 1 and Tier 2 sources are most likely to hold relevant material

Output a brief research brief (3–5 lines) summarizing your interpretation of the question before proceeding.

### Step 3 — Parallel Sub-Agent Literature Search

Plan and launch **4–6 parallel sub-agents**, each searching a different slice of the source landscape:

**Sub-Agent A — UN/Multilateral Grey Literature (Tier 1)**
- Search across UNESCO GEM Reports, UIS data, UNICEF education publications, World Bank education documents, GPE, ECW, and INEE
- Identify the most recent and most relevant documents or data
- Note publication year, source, and relevance to the research question

**Sub-Agent B — Research & Evidence Institutes (Tier 2)**
- Search J-PAL, 3ie, RISE, R4D, EdTech Hub, RTI, AIR, Brookings, CGD, ODI, IDRC, APHRC
- Prioritize systematic reviews and evaluations with LMIC focus
- Note methodology type (RCT, systematic review, quasi-experimental, qualitative, etc.)

**Sub-Agent C — Equity and Context Lens**
- Focus on evidence disaggregated by gender, disability, displacement, language, and socioeconomic status
- Draw from UNICEF, UNHCR, INEE, ECW, and any Tier 2 sources with explicit equity focus
- Flag where evidence gaps exist by population group or geography

**Sub-Agent D — Regional and Country-Level Evidence**
- Search for region-specific evidence: Sub-Saharan Africa, South/West Asia, MENA, LAC, EAP, and conflict-affected contexts
- Prioritize APHRC, regional UNESCO offices, World Bank country data, and ReliefWeb for humanitarian contexts
- Note where evidence from one region may or may not generalize

**Sub-Agent E — Policy and Implementation Evidence** *(launch if the question involves policy, financing, or systems)*
- Search for policy briefs, national education plans, financing analyses, and implementation lessons
- Draw from GEM Reports, GPE, World Bank, CGD, ODI, and government policy documents where available
- Distinguish between what the evidence shows and what has been adopted in policy

**Sub-Agent F — Academic and Peer-Reviewed Supplement** *(optional: launch if grey literature is thin)*
- Search ERIC and academic sources to supplement grey literature
- Clearly label these as outside the core grey literature corpus
- Note where academic findings confirm or diverge from grey literature

### Step 4 — Consolidate and Weight Findings

After all sub-agents complete:

1. **Gather** all findings across sub-agents
2. **Deduplicate** — keep the best-evidenced version of any repeated finding
3. **Weight by source tier:**
   - Tier 1 findings anchor the synthesis — quote and cite explicitly
   - Tier 2 findings substantiate and add nuance
   - Tier 3 / academic findings provide context or flag divergence
4. **Identify consensus** — where do multiple high-quality sources agree?
5. **Identify gaps** — where is evidence limited, contested, or absent?
6. **Flag context-dependency** — note where findings are context-specific and caution against overgeneralizing

### Step 5 — Apply Terminology and Framing

Before writing the final response, apply `edu-terminology.md`:

- Replace any flagged terminology with preferred terms
- Disaggregate by equity dimensions where evidence exists
- Frame outcomes in relation to SDG 4 sub-targets
- Use the evidence hierarchy to calibrate confidence language:
  - *"Strong evidence from multiple RCTs shows..."*
  - *"Programme evaluations suggest..."*
  - *"Limited evidence indicates..."*
  - *"Evidence on this is mixed..."*
  - *"No rigorous evidence was found on this question..."*

### Step 6 — Output Structured Response

Present findings in the following structure:

---

**Research Question:** [restate the question]

**SDG 4 Relevance:** [relevant sub-targets]

**Summary of Findings**
A 2–3 paragraph synthesis of the most important, highest-confidence evidence. Written in plain language for a policy audience.

**Key Evidence**

For each major finding:
> **[Finding title]**
> *Source:* [Source name, year] — *Tier [1/2/3]*
> *Evidence type:* [RCT / systematic review / programme evaluation / policy document / etc.]
> [2–4 sentence explanation of the finding, in global education terminology]

**Equity Dimensions**
What does the evidence say specifically about gender, disability, displacement, language, or socioeconomic status?

**Geographic Scope**
Where does this evidence come from? Where are the gaps?

**Evidence Gaps**
What key questions remain unanswered or under-evidenced?

**Recommended Sources for Further Reading**
List 3–5 specific documents (title, source, year, URL if known) for deeper exploration.

---

## Installation

Copy the `global-edu-research/` folder into your Claude skills directory:

```bash
cp -r global-edu-research/ ~/.claude/skills/
```

Or reference the folder directly when invoking Claude Code. Both companion files (`edu-sources.md` and `edu-terminology.md`) must be present in the same directory as this skill file.

## Customization

- **Add or re-tier sources:** Edit `edu-sources.md`
- **Update terminology:** Edit `edu-terminology.md`
- **Add a new sub-agent type:** Add a new Sub-Agent block in Step 3, specifying sources and focus
- **Narrow geography:** Include the target region in your research question for tighter filtering
