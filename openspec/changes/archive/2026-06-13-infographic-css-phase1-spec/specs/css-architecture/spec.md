## ADDED Requirements

### Requirement: Two-layer CSS custom property architecture
The library SHALL use a two-layer CSS custom property system.

Layer 1 — palette (on `:root`, never referenced directly in component rules):
```css
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
```

Layer 2 — semantic tokens (referenced in all component rules):
```css
--ig-accent:       var(--ig-color-blue);
--ig-text:         var(--ig-color-slate);
--ig-text-muted:   var(--ig-color-muted);
--ig-surface:      var(--ig-color-white);
--ig-surface-alt:  var(--ig-color-gray);
--ig-border:       var(--ig-color-border);
--ig-radius:       8px;
--ig-space-xs:     0.5rem;
--ig-space-sm:     1rem;
--ig-space-md:     1.5rem;
--ig-space-lg:     2.5rem;
```

#### Scenario: Component uses semantic token
- **WHEN** a Phase 2 CSS rule needs a color
- **THEN** it SHALL reference a semantic token (e.g., `var(--ig-accent)`) not a palette var (e.g., `var(--ig-color-blue)`)

#### Scenario: Theme extension point
- **WHEN** a future theme is introduced
- **THEN** it SHALL only need to redefine semantic tokens — palette vars may remain unchanged

### Requirement: Reset is scoped to ig-page
The library SHALL apply a box-model and margin reset scoped to `.ig-page` only.
It SHALL NOT apply a global reset.

```css
.ig-page,
.ig-page * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

#### Scenario: Embedded in existing page
- **WHEN** `infographic.css` is embedded via `<style>` inside a page with existing CSS
- **THEN** the reset SHALL NOT affect elements outside `.ig-page`

### Requirement: No external dependencies
The library SHALL work with zero network requests.

- No external font imports (`@import url(...)`)
- No CDN-hosted assets
- No image file references
- Font stack SHALL use system fonts: `system-ui, -apple-system, sans-serif`

#### Scenario: Offline rendering
- **WHEN** the HTML file is opened without internet access
- **THEN** the library SHALL render correctly with no missing resources

### Requirement: Single-file distribution
The library SHALL be distributable as a single `infographic.css` file that can be:
1. Linked via `<link rel="stylesheet" href="infographic.css">`
2. Copied verbatim into a `<style>` block in a standalone HTML file

Both use cases SHALL produce identical visual output.

#### Scenario: Embedded style block
- **WHEN** the entire contents of `infographic.css` are placed inside `<style>…</style>`
- **THEN** the infographic SHALL render identically to the linked-file version

### Requirement: No JavaScript
The library SHALL have zero JavaScript dependency. All state variants SHALL be
set statically in HTML at render time. The library SHALL NOT define or require
any JS event handlers.

#### Scenario: Step state without JS
- **WHEN** a process step is marked `--done`
- **THEN** the variant class is present in the static HTML — no script toggles it at runtime

### Requirement: Modern evergreen browser target
The library SHALL target modern evergreen browsers. Internet Explorer is explicitly
out of scope. The following CSS features MAY be used: CSS Grid, CSS custom properties,
CSS nesting, `:has()`, `clamp()`.

#### Scenario: Grid layout
- **WHEN** Phase 2 implements `ig-comparison-grid`
- **THEN** it MAY use `display: grid` without a fallback for IE
