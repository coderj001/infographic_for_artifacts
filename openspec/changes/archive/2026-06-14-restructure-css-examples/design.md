## Context

This repository currently has a single implementation stylesheet, `infographic.css`, and a flat `examples/` directory containing one shell example plus one file per family. The code is already small, but the repository structure does not make the layering obvious: the contract lives in skill/spec docs, the CSS implements the contract, and the examples prove it. The goal of this change is to make that separation visible at the file-organization level without changing rendering behavior.

## Goals / Non-Goals

**Goals:**
- Make the contract, implementation, and fixture layers obvious to a reader.
- Group example pages so the canonical shell is separate from family fixtures.
- Keep `infographic.css` as the only implementation stylesheet.
- Preserve the current visual behavior and class vocabulary.

**Non-Goals:**
- Changing the CSS patterns, variants, or markup contract.
- Adding JavaScript, build tooling, or external dependencies.
- Introducing a second stylesheet or a component framework.
- Reworking the visual design of the examples.

## Decisions

### D1: Keep one implementation stylesheet
**Decision:** `infographic.css` remains the only implementation stylesheet.

**Rationale:** The library is intentionally dependency-free and CSS-only. Splitting the stylesheet into multiple implementation files would add navigation overhead without changing the underlying contract. The structure problem is organizational, not architectural.

**Alternatives considered:**
- Split CSS by family. Rejected because it would fragment the single contract and make the examples harder to reason about.
- Generate CSS from a build step. Rejected because the repo is meant to stay LLM-readable and direct.

### D2: Make examples fixtures, not demos
**Decision:** The example pages should be treated as conformance fixtures with a clearer directory boundary between the shell example and the family examples.

**Rationale:** A fixture-oriented structure tells contributors what the files are for. It also reduces accidental drift where example pages start acting like ad hoc documentation pages rather than testable contract proofs.

**Alternatives considered:**
- Leave all examples flat in one directory. Rejected because the current layout hides the purpose of the shell page.
- Combine examples into a single showcase page. Rejected because each family needs to remain isolated for validation.

### D3: Accept path changes for fixtures
**Decision:** Example file paths may change as part of the reorganization.

**Rationale:** The examples are not a public API. Keeping old paths for compatibility would add clutter and weaken the purpose of the reorganization.

**Alternatives considered:**
- Keep compatibility copies or wrappers at the old paths. Rejected because it adds maintenance cost without improving the contract.

### D4: Keep contract text outside the CSS file
**Decision:** The authoritative contract remains in the skill/spec layer; `infographic.css` should not become the place where the repo-level contract is redefined.

**Rationale:** The CSS file should stay focused on implementation details. Duplicating contract language in CSS comments or prose creates two sources of truth for the same rule.

**Alternatives considered:**
- Copy more contract text into the CSS file. Rejected because it makes the implementation heavier and increases drift risk.

## Risks / Trade-offs

- [Risk] Example path changes may break existing links or bookmarks → Mitigation: treat the new paths as the canonical fixture layout and update all repo-local references in the same change.
- [Risk] The repo could still feel small enough that the reorganization seems cosmetic → Mitigation: keep the change minimal and only introduce directory boundaries that clarify ownership.
- [Risk] A new repo-structure spec could feel meta compared to the rendering contract → Mitigation: keep the spec focused on file roles and fixture boundaries, not on CSS behavior.

## Migration Plan

1. Create the new example directory structure.
2. Move the existing shell and family example pages into the new layout.
3. Update `examples/README.md` so it reflects the new grouping and role of the fixtures.
4. Verify that every example still references the shared `infographic.css`.
5. Run the examples in a browser and confirm the layout and styling are unchanged.

Rollback is straightforward: move the example files back to the flat layout and restore the old README index if the new organization proves more confusing than helpful.

## Open Questions

- Should the new fixture layout keep the shell page separate from the family pages only, or should it also distinguish between validation fixtures and showcase fixtures if more examples are added later?
- Should `examples/README.md` remain the only index, or should the root add a short pointer to the example fixture layout for faster discovery?
