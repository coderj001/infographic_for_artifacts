## Why

LLMs producing infographic HTML today use ad hoc layouts, inconsistent naming, and arbitrary markup. A strict, semantic CSS library with a locked contract gives LLMs a finite vocabulary to follow — producing consistent, readable infographics without interpretation.

Phase 1 defines that contract before any CSS is written.

## What Changes

- A new `SPEC.md` is created at the repo root defining the full library contract.
- Six pattern families are locked with their element inventory and variant enums.
- The canonical page shell structure is defined and frozen.
- Naming conventions are made explicit (prefix, schema, variant rules).
- CSS custom property architecture is specified (semantic layer over palette).
- Disambiguation rules are provided so an LLM can select the correct family.
- Tech stack is specified (vanilla CSS, scoped reset, no JS, no build step).

No CSS is written in this phase. No HTML examples. Spec only.

## Capabilities

### New Capabilities

- `page-shell`: Canonical page shell — `ig-page`, `ig-header`, `ig-main`, `ig-footer` — with element inventory and usage rules.
- `pattern-families`: Six pattern families (process, comparison, structure, analysis, data, code) with full element inventory and per-element variant enums.
- `callout-component`: Cross-family reusable `ig-callout` component with five bounded variants.
- `naming-conventions`: Explicit naming schema (`ig-{family}-{element}--{variant}`), prefix rules, and variant bounding rules.
- `css-architecture`: CSS custom property architecture — semantic layer over SemiColony palette, scoped reset, single-file distribution contract.

### Modified Capabilities

*(none — greenfield)*

## Impact

- Creates `SPEC.md` as the authoritative contract for all subsequent phases.
- Phase 2 (CSS implementation) is blocked until this spec is approved.
- The companion skill (Phase 4) will be written against this spec.
- No existing code is modified — this is a documentation-only phase.
