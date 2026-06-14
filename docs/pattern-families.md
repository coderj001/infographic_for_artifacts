# Infographic Pattern Families

This document lists all the infographic design pattern families available in the library ([infographic.css](file:///Users/raju/Develop/Personal/infographic_for_artifacts/skills/infographic-css/infographic.css)).

Every infographic layout uses the canonical page shell:
- `<body class="ig-page">` as the document container.
- `<header class="ig-header">` for the title (`ig-header-title`), subtitle (`ig-header-subtitle`), and optional metadata (`ig-header-meta`).
- `<main class="ig-main [family-class]">` containing exactly one active pattern family class.
- `<footer class="ig-footer">` for optional footer content.

---

## 1. Process (`ig-main.ig-process`)
Use when the content is an ordered sequence of discrete, consecutive steps.

### Element Inventory & Class Vocab
| Element / Class | Role | Allowed Variants |
| --- | --- | --- |
| `ig-process-steps` | Container for all steps | None |
| `ig-process-step` | Individual step block | `--active`, `--done`, `--skip` |
| `ig-process-step-number` | Ordinal or sequential indicator | None |
| `ig-process-step-title` | Heading of the step | None |
| `ig-process-step-body` | Step description or nested content | None |

### Rules
- `ig-process-steps` is the required parent.
- Each `ig-process-step` must contain `ig-process-step-number` and `ig-process-step-title`.
- `ig-process-step-body` is optional.

---

## 2. Comparison (`ig-main.ig-comparison`)
Use to compare two or more options/columns across shared traits.

### Element Inventory & Class Vocab
| Element / Class | Role | Allowed Variants |
| --- | --- | --- |
| `ig-comparison-grid` | Grid container for columns | `--matrix` |
| `ig-comparison-col` | Single option column | `--highlight`, `--muted` |
| `ig-comparison-col-head` | Column header / option name | None |
| `ig-comparison-row` | Trait row spanning all columns | None |
| `ig-comparison-trait` | Matrix row container | None |
| `ig-comparison-trait-label` | Matrix trait label | None |
| `ig-comparison-cell` | Matrix comparison cell | `--highlight` |

### Rules
- Comparison must contain at least two options.
- In normal mode, use `ig-comparison-col` (with optional `--highlight` or `--muted` modifier) containing `ig-comparison-col-head` and optional `ig-comparison-row` blocks.
- In matrix mode (`ig-comparison-grid--matrix`), headers are direct children, and trait rows are represented by `ig-comparison-trait` containing `ig-comparison-trait-label` followed by one `ig-comparison-cell` per option.

---

## 3. Structure (`ig-main.ig-structure`)
Use for organizational charts, hierarchies, and tree diagrams.

### Element Inventory & Class Vocab
| Element / Class | Role | Allowed Variants |
| --- | --- | --- |
| `ig-structure-tree` | Tree layout container | `--flat` |
| `ig-structure-node` | A node in the hierarchy | `--root`, `--leaf` |
| `ig-structure-node-label` | Text label for the node | None |
| `ig-structure-children` | Wrapper for children of the current node | None |

### Rules
- Exactly one root node (`ig-structure-node--root`) must exist.
- Child nodes must be wrapped inside `ig-structure-children` to render the tree branch lines correctly.
- Branches/connectors are drawn automatically via CSS. No extra markup is required.

---

## 4. Analysis (`ig-main.ig-analysis`)
Use for qualitative judgment, assessment grids, or pros/cons.

### Element Inventory & Class Vocab
| Element / Class | Role | Allowed Variants |
| --- | --- | --- |
| `ig-analysis-grid` | Grid container for items | None |
| `ig-analysis-item` | Single judgment item card | `--positive`, `--negative`, `--neutral` |
| `ig-analysis-item-label` | Item title or attribute name | None |
| `ig-analysis-item-value` | Score, judgment, or status text | None |

### Rules
- Each `ig-analysis-item` must carry exactly one variant modifier (`--positive`, `--negative`, or `--neutral`).
- Both `ig-analysis-item-label` and `ig-analysis-item-value` are required inside each item card.

---

## 5. Data (`ig-main.ig-data`)
Use for numerical charts, statistics, progress tracking, and donut gauges.

### Element Inventory & Class Vocab
| Element / Class | Role | Allowed Variants |
| --- | --- | --- |
| `ig-data-chart` | Main data container | `--bar`, `--stat`, `--donut` |
| `ig-data-bar` | Proportional progress bar | `--primary`, `--accent`, `--muted` |
| `ig-data-stat` | Single stat card | None |
| `ig-data-donut` | Donut chart metric card | None |
| `ig-data-label` | Data label/legend | None |
| `ig-data-value` | Numeric or percentage value | None |

### Rules
- `ig-data-chart` must carry exactly one variant modifier.
- In `--bar` mode, set the custom property `--ig-data-fill` as a percentage on `ig-data-bar` (e.g., `style="--ig-data-fill: 75%"`).
- In `--donut` mode, `ig-data-donut` must contain an inline SVG with `.ig-data-donut-track` and `.ig-data-donut-fill` paths.

---

## 6. Code (`ig-main.ig-code`)
Use for displaying code snippets, system configurations, and annotations/diffs.

### Element Inventory & Class Vocab
| Element / Class | Role | Allowed Variants |
| --- | --- | --- |
| `ig-code-block` | Layout container | `--diff`, `--highlight` |
| `ig-code-snippet` | The pre/code element wrapper | None |
| `ig-code-annotation` | Sidelined explanatory comment | None |

### Rules
- `ig-code-snippet` must wrap exactly one `<pre><code>` element.
- `ig-code-annotation` must be a sibling (not child) of `ig-code-snippet`.

---

## Cross-Family Helper: Callout (`ig-callout`)
A reusable callout box that can be nested inside any family container.

### Element Inventory & Class Vocab
| Element / Class | Role | Allowed Variants |
| --- | --- | --- |
| `ig-callout` | Callout box container | `--risk`, `--note`, `--tip`, `--key`, `--warning` |
| `ig-callout-icon` | Container for optional emoji/SVG | None |
| `ig-callout-body` | Requisite callout text/content | None |

### Rules
- `ig-callout` must always carry exactly one variant modifier.
