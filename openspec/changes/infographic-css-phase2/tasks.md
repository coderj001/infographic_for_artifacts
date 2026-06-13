## 1. SPEC.md Updates

- [ ] 1.1 Update `ig-data-chart` element table to add variants `--bar`, `--stat`, `--donut` and mark variant as required
- [ ] 1.2 Add `ig-data-stat` and `ig-data-donut` to the Data family element inventory with their child elements and rules
- [ ] 1.3 Add the `--ig-data-fill` custom property rule under the Data family rules section
- [ ] 1.4 Add the normative SVG structure example for `ig-data-donut` to the spec
- [ ] 1.5 Add `ig-structure-children` to the Structure family element inventory and update tree/flat mode rules
- [ ] 1.6 Update `ig-structure-tree` to list `--flat` as its variant; document the nesting contract
- [ ] 1.7 Add `ig-comparison-grid--matrix` variant to the Comparison family element table
- [ ] 1.8 Add `ig-comparison-trait`, `ig-comparison-trait-label`, and `ig-comparison-cell` (with `--highlight`) to the element inventory
- [ ] 1.9 Add `--ig-col-count` custom property rule for matrix mode
- [ ] 1.10 Update CSS Architecture section 5 to permit inline SVG; restate "CSS-only" as "zero JS, zero external resources"

## 2. ig-data CSS

- [ ] 2.1 Add `ig-data-chart--bar` rule: override `ig-data-bar` to use `linear-gradient(to right, var(--ig-accent) var(--ig-data-fill, 0%), var(--ig-surface) 0%)` as background
- [ ] 2.2 Add `ig-data-chart--stat` rule: set grid layout for stat items; style `ig-data-stat` with large value and muted label beneath
- [ ] 2.3 Add `ig-data-chart--donut` rule: set grid layout for donut items
- [ ] 2.4 Add `ig-data-donut` rules: size the SVG container, position label and value adjacent to the ring
- [ ] 2.5 Add `.ig-data-donut-track` SVG rule: stroke color `var(--ig-border)`, no fill
- [ ] 2.6 Add `.ig-data-donut-fill` SVG rule: stroke color `var(--ig-accent)`, `stroke-linecap: round`, rotate origin via `transform-origin: center`
- [ ] 2.7 Verify existing bare `ig-data-chart` rules do not conflict with new variant rules

## 3. ig-structure CSS

- [ ] 3.1 Add `ig-structure-children` rule: `padding-left: var(--ig-space-md)`, `position: relative`, `border-left: 2px solid var(--ig-border)`
- [ ] 3.2 Add `ig-structure-children > .ig-structure-node::before` connector stub: horizontal tick from the left border to the node
- [ ] 3.3 Add `ig-structure-tree--flat` rule to preserve existing flat behavior (no connector lines, margin-left indentation only)
- [ ] 3.4 Ensure bare `ig-structure-tree` (tree mode) does not apply margin-left to direct child nodes — margin comes from `ig-structure-children` only
- [ ] 3.5 Verify `ig-structure-node--root` and `ig-structure-node--leaf` styles are unaffected

## 4. ig-comparison CSS

- [ ] 4.1 Add `ig-comparison-grid--matrix` rule: `display: grid; grid-template-columns: max-content repeat(var(--ig-col-count, 2), 1fr); gap: var(--ig-space-xs)`
- [ ] 4.2 Add `ig-comparison-col-head` rule scoped to `--matrix` context: align to center, apply accent underline or background tint to distinguish header row
- [ ] 4.3 Add `ig-comparison-trait` rule: `display: contents` (so its children participate directly in the parent grid)
- [ ] 4.4 Add `ig-comparison-trait-label` rule: font-weight, muted color, align to start
- [ ] 4.5 Add `ig-comparison-cell` rule: padding, border, surface background
- [ ] 4.6 Add `ig-comparison-cell--highlight` rule: accent border-left and tinted background

## 5. Verification

- [ ] 5.1 Open `examples/data.html` in a browser and manually verify bar fill, stat grid, and donut ring render correctly against the updated CSS
- [ ] 5.2 Open `examples/structure.html` and verify nested tree mode renders with connector lines; verify `--flat` variant restores old appearance
- [ ] 5.3 Open `examples/comparison.html` and verify `--matrix` layout aligns trait labels with option columns correctly
- [ ] 5.4 Verify all five callout variants still render correctly (no regressions from new rules)
- [ ] 5.5 Verify `infographic.css` is usable as a `<link>` and as an embedded `<style>` block for at least one of the updated families
