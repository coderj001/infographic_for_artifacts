## Context

The infographic CSS library has no existing code. This is a greenfield spec phase.
The deliverable is `SPEC.md` — a single authoritative document that becomes the
contract for Phase 2 (CSS), Phase 3 (examples), and Phase 4 (companion skill).

Constraints established in exploration:
- One visual theme for v1 (SemiColony palette)
- No JavaScript — purely static HTML
- No external dependencies (fonts, CDNs, frameworks)
- Must work embedded in a `<style>` block OR as a linked `infographic.css`
- LLM is the primary consumer of the spec

## Goals / Non-Goals

**Goals:**
- Produce `SPEC.md` that is precise enough for an LLM to follow without interpretation
- Lock the class naming schema, element inventory, and variant enums for all six families
- Define the canonical page shell
- Define the CSS custom property architecture
- Provide LLM selection rules (disambiguation) for each family

**Non-Goals:**
- Writing any CSS (Phase 2)
- Creating HTML examples (Phase 3)
- Writing the companion skill (Phase 4)
- Multi-theme support — v1 is single-theme only
- Converter automation — the spec is documentation, not a pipeline

## Decisions

### D1: One family per page
**Decision:** A single infographic uses exactly one pattern family. The family class goes on `<body>`.

**Rationale:** Mixing families on one page introduces ambiguous CSS selector scope and forces the LLM to make layout decisions that belong to the library. Constraining to one family per page makes the LLM's job deterministic.

**Alternative considered:** Section-scoped families (each `<section>` picks a family). Rejected — too flexible, LLMs would mix families randomly and layout rules become unpredictable.

---

### D2: Semantic CSS custom property layer
**Decision:** Two-layer CSS variable architecture:

```css
/* Layer 1: Palette (do not use directly) */
--ig-color-blue:    #3B82F6;
--ig-color-slate:   #1E293B;
--ig-color-navy:    #0F172A;
--ig-color-white:   #FFFFFF;
--ig-color-gray:    #F8FAFC;
--ig-color-border:  #E2E8F0;
--ig-color-muted:   #64748B;
--ig-color-done:    #22C55E;
--ig-color-current: #EAB308;
--ig-color-locked:  #94A3B8;

/* Layer 2: Semantic tokens (use these in component rules) */
--ig-accent:        var(--ig-color-blue);
--ig-text:          var(--ig-color-slate);
--ig-text-muted:    var(--ig-color-muted);
--ig-surface:       var(--ig-color-white);
--ig-surface-alt:   var(--ig-color-gray);
--ig-border:        var(--ig-color-border);
--ig-radius:        8px;
--ig-space-xs:      0.5rem;
--ig-space-sm:      1rem;
--ig-space-md:      1.5rem;
--ig-space-lg:      2.5rem;
```

**Rationale:** Semantic tokens are the extension point for future multi-theme support (Phase 6). Phase 2 CSS only references semantic tokens — palette vars are never used directly in component rules. Swapping a theme = redefining semantic tokens only.

**Alternative considered:** Flat palette vars used directly. Rejected — creates tight coupling to specific hex values, makes future theming expensive.

---

### D3: Vanilla CSS, no preprocessor
**Decision:** `infographic.css` is authored and distributed as vanilla CSS. No Sass, no PostCSS, no build step.

**Rationale:** The spec and the CSS are both consumed by LLMs. A preprocessor makes the source diverge from the output — the LLM reads generated CSS it cannot trace back to intent. Vanilla CSS with custom properties is expressive enough for v1.

**Alternative considered:** Sass with `@each` loops for variant generation. Rejected — adds a build step, output is harder for LLMs to read and modify.

---

### D4: Scoped reset, not global
**Decision:** Reset is scoped to `ig-page`:

```css
.ig-page,
.ig-page * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

**Rationale:** The library may be embedded in a `<style>` block inside a page that has its own styles. A global reset (`*, *::before`) would break surrounding content. Scoped reset is safe for both use cases.

---

### D5: Callout escapes family scope
**Decision:** `ig-callout` uses a flat namespace — it is not prefixed with the current family name. It can appear inside any family container.

**Rationale:** Callouts are a cross-cutting concern. Scoping them per-family (e.g., `ig-process-callout`) would create five copies of identical CSS rules. One set of callout rules handles all families.

---

### D6: Structure edges are CSS-only
**Decision:** No `ig-structure-edge` element exists. Tree connectors between nodes are rendered purely via CSS (borders, pseudo-elements, or grid lines).

**Rationale:** Explicit edge elements require precise DOM positioning, which is fragile in pure CSS. LLMs would need to know the exact count and placement of edge elements. CSS connectors derived from the node container layout are more reliable and require no edge markup.

---

### D7: No CSS Layers
**Decision:** `@layer` is not used in v1.

**Rationale:** Layers add complexity for a library designed to be embedded by LLMs. A single flat stylesheet with consistent specificity is easier to reason about and override. Layers are a candidate for v2 if consumer conflicts emerge.

---

### D8: No JavaScript, no interactivity
**Decision:** The library has zero JavaScript dependency. State variants (`--active`, `--done`) are static — they must be set in the HTML at render time, not toggled dynamically.

**Rationale:** LLMs generate static HTML. A CSS library that requires JS to work correctly would require the LLM to also generate correct JS event handling — a compounding source of error. Static variants eliminate this coupling.

## Risks / Trade-offs

- **[Risk] Spec ambiguity survives Phase 1** → Mitigation: Each element and variant must have an acceptance scenario in the spec files before Phase 1 closes.
- **[Risk] Six families are insufficient** → Mitigation: Spec explicitly states new families are v2+ scope. If an LLM cannot map content to a family, it must choose the closest one and add a callout explaining the mismatch.
- **[Risk] Single-theme constraint feels limiting immediately** → Mitigation: Semantic token layer (D2) makes theming a future one-file swap. The constraint is documented as intentional in the spec.
- **[Trade-off] No JS = no interactivity** → This is a deliberate design choice, not a limitation. The library's value is predictability, not expressiveness.
