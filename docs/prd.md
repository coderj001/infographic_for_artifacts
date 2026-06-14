---
title: Infographic CSS Library PRD
status: draft
---

# PRD

## Objective

Build a dependency-free infographic CSS library that can be embedded in a single HTML file or used as a standalone stylesheet at `skills/infographic-css/infographic.css` with a root `infographic.css` compatibility wrapper. The library should help an LLM explain concepts to humans with strict, semantic HTML patterns rather than ad hoc layouts.

## Product Shape

- One visual theme for v1.
- Verbose semantic class names.
- Bounded variants only.
- CSS-only rendering surface.
- Companion skill docs that teach the LLM how to use the library.

## Phases

### Phase 1: Define the contract

- Finalize the spec for the library.
- Lock the pattern families and the reusable callout component.
- Define the canonical page shell.
- Freeze naming conventions and variant rules.

Acceptance criteria:

- `SPEC.md` exists and reflects the agreed contract.
- The pattern catalog is limited to the approved families.
- The page shell is defined once and documented consistently.
- Naming conventions are explicit enough for an LLM to follow without interpretation.

### Phase 2: Build the CSS library

- Implement `skills/infographic-css/infographic.css`.
- Implement the canonical page shell.
- Implement the six pattern families:
  - Process
  - Comparison
  - Structure
  - Analysis
  - Data
  - Code
- Implement reusable callout styles, including risk.

Acceptance criteria:

- `skills/infographic-css/infographic.css` renders the page shell and all documented families.
- Each family has a distinct visual treatment and stable class contract.
- The CSS works without any JavaScript dependency.
- Risk callouts and other callouts render consistently inside multiple families.

### Phase 3: Create canonical examples

- Create one example HTML file per pattern family.
- Include one example for the page shell.
- Include examples for the reusable callout component.
- Ensure examples are rich enough for an LLM to copy as a template.

Acceptance criteria:

- There is at least one HTML example for each pattern family.
- The examples demonstrate valid, canonical class usage.
- The examples are understandable without reading implementation code.
- The examples are detailed enough for an LLM to reuse directly.

### Phase 4: Write the companion skill

- Write the skill that documents the library for LLM use.
- Include pattern selection guidance.
- Include copy-ready examples and usage constraints.
- Keep the skill as documentation, not as a converter or planner.

Acceptance criteria:

- The skill clearly explains what each family is for.
- The skill links the LLM to the canonical examples.
- The skill does not claim to transform source documents automatically.
- The skill focuses on documentation and pattern selection only.

### Phase 5: Validate the output

- Verify the library works in a single HTML file with an embedded `<style>` block.
- Verify the standalone CSS file works the same way.
- Verify each pattern has a stable class contract.
- Verify the examples are visually clear and human-readable.

Acceptance criteria:

- The library renders correctly in both embedded and standalone CSS forms.
- Pattern markup can be repeated without breaking layout.
- The examples produce a human-readable output that matches the intent of the source content.
- Any broken or ambiguous class contract is fixed before release.

### Phase 6: Polish and freeze v1

- Review the markup contract for ambiguity.
- Remove any pattern or variant that is too broad.
- Freeze v1 scope and prepare for future expansion only after the first release is stable.

Acceptance criteria:

- The v1 pattern set is intentionally narrow and documented.
- No unresolved ambiguity remains in the class naming or variant structure.
- The release notes clearly state that multi-theme support and converter automation are out of scope.
