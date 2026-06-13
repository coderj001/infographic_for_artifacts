## Context

Phase 2 established the CSS contract for the infographic library. Phase 3 turns that contract into a canonical fixture set so an LLM or author can copy a complete example instead of assembling markup from scratch. The repository already contains shell and family fixtures under `examples/`; this phase formalizes that corpus and adds a dedicated callout example.

## Goals / Non-Goals

**Goals:**
- Provide one canonical HTML fixture for the shell, each family, and the reusable callout component.
- Keep every fixture directly openable in a browser with the shared `infographic.css` stylesheet.
- Make the fixture set readable enough to use as a template without consulting implementation code.
- Preserve the existing zero-JavaScript, zero-external-dependency contract.

**Non-Goals:**
- Do not change the CSS implementation or expand the class contract.
- Do not add alternate themes, framework wrappers, or generated documentation output.
- Do not introduce scripts or build steps for the example pages.

## Decisions

- Keep fixtures as plain HTML files under `examples/` instead of generating them from markdown or a docs tool. Direct HTML is the canonical artifact here, and it stays closer to the actual contract consumers will copy.
- Use one dedicated callout fixture file rather than relying only on incidental callouts inside family pages. That gives the reusable component a single obvious template and reduces ambiguity about the intended markup.
- Link every fixture to the shared root `infographic.css` with a relative path. This proves the same contract works in both standalone-file and linked-stylesheet usage.
- Keep the shell fixture separate from the family fixtures. The shell is the base layout contract, and isolating it prevents family-specific markup from obscuring the page scaffold.

## Risks / Trade-offs

- [Fixture drift] The example pages can diverge from the CSS contract over time. → Mitigation: treat the examples as conformance fixtures and verify them whenever the stylesheet changes.
- [Ambiguous callout surface] Callouts appear in multiple contexts and could accumulate inconsistent variants. → Mitigation: keep one canonical callout example and limit it to the approved states.
- [Duplication] Separate example pages repeat shell markup. → Mitigation: accept the duplication because these files are templates, not shared runtime code.

## Migration Plan

1. Add or normalize the canonical fixture pages under `examples/`.
2. Add the dedicated callout fixture and update `examples/README.md` to reflect the final fixture inventory.
3. Verify each fixture opens directly and uses the shared stylesheet path.
4. If a fixture proves ambiguous, trim it before release rather than adding more variants.

## Open Questions

- None. The phase boundary is narrow enough that the fixture set can be specified and implemented directly.
