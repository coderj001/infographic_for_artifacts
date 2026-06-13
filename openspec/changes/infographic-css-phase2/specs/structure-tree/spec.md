## ADDED Requirements

### Requirement: ig-structure-children is the nesting wrapper for tree mode
In tree mode (bare `ig-structure-tree` with no variant), an `ig-structure-node` that has child nodes SHALL wrap those children in an `ig-structure-children` element. `ig-structure-children` is the only valid container for nested `ig-structure-node` elements.

#### Scenario: Parent with children
- **WHEN** an `ig-structure-node` contains an `ig-structure-children` element
- **THEN** the children SHALL render indented relative to the parent with a CSS-only vertical connector line along their left edge

#### Scenario: Leaf node (no children)
- **WHEN** an `ig-structure-node` has no `ig-structure-children` element
- **THEN** it SHALL render as a terminal node with no connector line extending downward

#### Scenario: Multi-level nesting
- **WHEN** an `ig-structure-children` contains nodes that themselves contain `ig-structure-children`
- **THEN** each level SHALL indent further and draw its own connector line, producing a tree of arbitrary depth

---

### Requirement: ig-structure-tree--flat preserves the flat indentation mode
`ig-structure-tree--flat` is the variant for the existing flat rendering behavior. In flat mode, all `ig-structure-node` elements are direct children of `ig-structure-tree`. No `ig-structure-children` wrapper is used. Indentation is rendered via `margin-left` only, with no vertical connector lines between sibling nodes.

#### Scenario: Flat mode declared
- **WHEN** the container is `<div class="ig-structure-tree ig-structure-tree--flat">`
- **THEN** child `ig-structure-node` elements SHALL render as a flat indented list with the same visual treatment as the pre-Phase-2 default

#### Scenario: Flat mode with --root and --leaf
- **WHEN** `ig-structure-tree--flat` contains nodes with `--root` and `--leaf` variants
- **THEN** those variants SHALL continue to apply their existing styles

---

### Requirement: Tree connector lines are CSS-only
In tree mode, the CSS SHALL render connector lines between `ig-structure-children` and its child nodes using `::before` and `::after` pseudo-elements. No SVG, no JavaScript, and no image files are used for connectors.

#### Scenario: Connector visible between parent and children
- **WHEN** an `ig-structure-node` contains an `ig-structure-children` element with at least one child
- **THEN** a vertical line SHALL appear along the left side of `ig-structure-children`, connecting the children visually to their parent

#### Scenario: Connector color matches border token
- **WHEN** connector lines render
- **THEN** they SHALL use `var(--ig-border)` as their color, matching the card border tone

---

### Requirement: ig-structure-node--root and --leaf remain valid in tree mode
The `--root` and `--leaf` variants on `ig-structure-node` defined in Phase 1 SHALL remain valid in tree mode without modification.

#### Scenario: Root node in tree mode
- **WHEN** the tree-mode root node carries `ig-structure-node--root`
- **THEN** it SHALL render without indentation or a left connector line, as it has no parent

#### Scenario: Leaf node in tree mode
- **WHEN** a terminal node carries `ig-structure-node--leaf`
- **THEN** it SHALL render with the leaf background style and no `ig-structure-children` wrapper (since it has no children)
