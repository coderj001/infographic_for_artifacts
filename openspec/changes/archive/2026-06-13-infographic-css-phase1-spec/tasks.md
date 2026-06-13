## 1. Draft SPEC.md

- [x] 1.1 Create `SPEC.md` at the repo root with the page shell contract (ig-page, ig-header, ig-main, ig-footer and their child elements)
- [x] 1.2 Add the naming schema section (`ig-{family}-{element}--{variant}` rules, prefix rules, verbosity rule)
- [x] 1.3 Add the six pattern families section with full element inventory per family
- [x] 1.4 Add the per-element variant enum table for all families
- [x] 1.5 Add the callout component section (ig-callout, five variants, fixed structure)
- [x] 1.6 Add the disambiguation rules section (Process vs Structure, Data vs Analysis)

## 2. CSS Architecture Section

- [x] 2.1 Add the CSS custom property architecture to SPEC.md — Layer 1 palette vars and Layer 2 semantic tokens with their values
- [x] 2.2 Add the scoped reset contract to SPEC.md (ig-page scoped, not global)
- [x] 2.3 Add the no-external-dependencies rule and system font stack to SPEC.md
- [x] 2.4 Add the single-file distribution contract and browser target to SPEC.md
- [x] 2.5 Add the no-JavaScript rule to SPEC.md

## 3. LLM Guidance Section

- [x] 3.1 Add a "How to use this library" section to SPEC.md — step-by-step for an LLM: (1) pick family, (2) write shell, (3) write family markup, (4) add callouts
- [x] 3.2 Add the family selection guide with clear USE WHEN / DO NOT USE WHEN rules for each family
- [x] 3.3 Add a "what to do if no family fits" rule

## 4. Review and Freeze

- [x] 4.1 Verify every element listed in SPEC.md has a defined variant list (or explicit "no variants")
- [x] 4.2 Verify no element name uses abbreviations not in the allowed list (`col` is ok, `hd` is not)
- [x] 4.3 Verify the callout section lists all five variants with their intent descriptions
- [x] 4.4 Verify the CSS var section has both layers complete with all ten palette vars and all semantic tokens
- [x] 4.5 Read SPEC.md as if you are an LLM — verify you can produce valid markup for a process infographic using only the spec, without interpretation
- [x] 4.6 Read SPEC.md as if you are an LLM — verify you can produce valid markup for a comparison infographic using only the spec, without interpretation
