## ADDED Requirements

### Requirement: ig-data-chart requires a variant
`ig-data-chart` SHALL carry exactly one of the following variant modifiers: `--bar`, `--stat`, or `--donut`. A bare `ig-data-chart` with no variant is invalid.

#### Scenario: Bar variant declared
- **WHEN** an LLM writes `<div class="ig-data-chart ig-data-chart--bar">`
- **THEN** the container SHALL render its child `ig-data-bar` elements as proportional horizontal bars

#### Scenario: Stat variant declared
- **WHEN** an LLM writes `<div class="ig-data-chart ig-data-chart--stat">`
- **THEN** the container SHALL render its child `ig-data-stat` elements as a metric grid of large numbers

#### Scenario: Donut variant declared
- **WHEN** an LLM writes `<div class="ig-data-chart ig-data-chart--donut">`
- **THEN** the container SHALL render its child `ig-data-donut` elements as ring charts

#### Scenario: No variant present
- **WHEN** an LLM writes `<div class="ig-data-chart">` with no variant
- **THEN** the output is considered invalid per this spec; the LLM SHALL NOT generate bare `ig-data-chart` elements

---

### Requirement: ig-data-bar uses --ig-data-fill for proportional width
In `--bar` mode, each `ig-data-bar` element SHALL accept an inline CSS custom property `--ig-data-fill` expressed as a percentage (e.g. `style="--ig-data-fill: 73%"`). The CSS SHALL render a visual fill occupying that proportion of the bar's container width using a `linear-gradient`.

#### Scenario: Fill property present
- **WHEN** `ig-data-bar` has `style="--ig-data-fill: 60%"`
- **THEN** the bar SHALL display a colored fill covering approximately 60% of its width, with the remainder in the surface color

#### Scenario: Fill property absent
- **WHEN** `ig-data-bar` has no `--ig-data-fill` property
- **THEN** the bar SHALL fall back to `var(--ig-data-fill, 0%)` — rendering as an unfilled bar

#### Scenario: ig-data-label and ig-data-value still required
- **WHEN** an `ig-data-bar` is written in `--bar` mode
- **THEN** it SHALL contain both `ig-data-label` and `ig-data-value` as children, as in the base spec

---

### Requirement: ig-data-stat is the element for stat/metric grid mode
In `--stat` mode, `ig-data-chart` SHALL contain one or more `ig-data-stat` elements. Each `ig-data-stat` SHALL contain `ig-data-value` (the large numeric or metric display) and `ig-data-label` (the caption beneath).

#### Scenario: Stat element rendered
- **WHEN** `ig-data-chart--stat` contains an `ig-data-stat` with `ig-data-value` and `ig-data-label`
- **THEN** the value SHALL render at a large, visually prominent size and the label SHALL render beneath it in a smaller, muted style

#### Scenario: Multiple stat elements
- **WHEN** `ig-data-chart--stat` contains multiple `ig-data-stat` elements
- **THEN** they SHALL render in a responsive grid layout

---

### Requirement: ig-data-donut is the element for donut/ring chart mode
In `--donut` mode, `ig-data-chart` SHALL contain one or more `ig-data-donut` elements. Each `ig-data-donut` SHALL contain an inline `<svg>` element using `stroke-dasharray` on a `<circle>` to represent the ring fill, plus `ig-data-label` for the caption and `ig-data-value` for the center or adjacent numeric display.

The SVG SHALL use the following structure as the normative pattern:
```html
<svg viewBox="0 0 36 36" class="ig-data-donut-svg">
  <circle class="ig-data-donut-track" cx="18" cy="18" r="15.9155" fill="none" stroke-width="3.5"/>
  <circle class="ig-data-donut-fill"  cx="18" cy="18" r="15.9155" fill="none" stroke-width="3.5"
          stroke-dasharray="73 27" stroke-dashoffset="25"/>
</svg>
```
Where `stroke-dasharray="X 100-X"` represents X percent fill.

#### Scenario: Donut element with 73% fill
- **WHEN** `ig-data-donut` contains an SVG with `stroke-dasharray="73 27"`
- **THEN** the ring SHALL visually represent 73% filled

#### Scenario: Donut with label and value
- **WHEN** `ig-data-donut` contains `ig-data-label` and `ig-data-value` alongside the SVG
- **THEN** the label and value SHALL render adjacent to the ring, not overlapping the SVG

#### Scenario: Inline SVG is permitted
- **WHEN** an `ig-data-donut` element contains an inline `<svg>` element
- **THEN** this is valid per the updated spec; no external SVG file or JavaScript is required
