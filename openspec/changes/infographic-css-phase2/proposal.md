## Why

Phase 1 locked the spec contract and produced a working `infographic.css`, but three families ship with rendering gaps that prevent an LLM from expressing a meaningful infographic: `ig-data` has no visual chart capability, `ig-structure` supports only flat indentation with no real nesting, and `ig-comparison` has no row-spanning trait model. Phase 2 closes all three gaps before examples and the companion skill are written.

## What Changes

- **ig-data** gains three distinct chart modes: proportional bar (CSS fill), stat/metric grid (typography-only), and donut/pie (inline SVG). `ig-data-chart` gets a required variant. A new `--ig-data-fill` custom property enables percentage-driven bar widths. Inline SVG is explicitly permitted for the donut mode.
- **ig-structure** gains a true tree mode via DOM nesting. A new `ig-structure-children` wrapper element allows arbitrarily deep hierarchies. Connectors between nodes are rendered with CSS only. The current flat behavior is preserved as `ig-structure-tree--flat`.
- **ig-comparison** gains a matrix mode (`ig-comparison-grid--matrix`) where trait labels span all columns. Three new elements — `ig-comparison-trait`, `ig-comparison-trait-label`, and `ig-comparison-cell` — support the row-span layout. The existing column-owns-rows model is preserved as the default (no variant).
- **SPEC.md** is updated to reflect all new elements, variants, and the inline SVG permission.

## Capabilities

### New Capabilities

- `data-chart-modes`: Three visual chart modes for the `ig-data` family — bar (CSS proportional fill), stat (metric grid), and donut (inline SVG). Defines `ig-data-chart` variants, the `--ig-data-fill` CSS custom property, and the `ig-data-donut` SVG element contract.
- `structure-tree`: True DOM-nested tree rendering for the `ig-structure` family. Defines `ig-structure-children` as a nesting wrapper, CSS connector rendering, and the `--flat` variant to preserve the existing flat mode.
- `comparison-matrix`: Row-spanning trait layout for the `ig-comparison` family. Defines `ig-comparison-grid--matrix`, `ig-comparison-trait`, `ig-comparison-trait-label`, and `ig-comparison-cell` with a `--highlight` variant.

### Modified Capabilities

- `pattern-families`: The element inventory for `ig-data`, `ig-structure`, and `ig-comparison` all gain new elements and variants. The variant rules and element tables in SPEC.md change.
- `css-architecture`: Inline SVG is now a permitted rendering surface alongside CSS. The "CSS-only" constraint is narrowed to mean zero JavaScript and zero external dependencies, not zero SVG.

## Impact

- `infographic.css` — adds new rules for chart modes, tree connectors, and matrix layout
- `SPEC.md` — element inventory tables and variant rules updated for all three families; SVG permission stated explicitly
- `examples/` — existing stubs remain valid; new examples needed for each new mode (deferred to Phase 3)
- No breaking changes to existing markup — all new modes are opt-in via new variants
