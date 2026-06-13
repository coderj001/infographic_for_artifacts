## ADDED Requirements

### Requirement: Page shell provides the document container
The library SHALL define a canonical page shell that wraps every infographic.
The shell consists of `ig-page` on `<body>`, containing `ig-header`, `ig-main`,
and optionally `ig-footer`. The pattern family lives inside `ig-main`.

#### Scenario: Minimal valid shell
- **WHEN** an LLM renders any infographic
- **THEN** the markup SHALL contain `<body class="ig-page">` with at least `ig-header` and `ig-main` as direct children

#### Scenario: Optional footer
- **WHEN** the infographic has no source attribution or footer content
- **THEN** `ig-footer` MAY be omitted without breaking layout

### Requirement: Header elements are defined and bounded
The `ig-header` container SHALL support exactly three child elements:
`ig-header-title` (required), `ig-header-subtitle` (optional), and `ig-header-meta` (optional).
No other direct children are permitted.

#### Scenario: Minimal header
- **WHEN** an infographic has only a title
- **THEN** the markup SHALL be `<header class="ig-header"><h1 class="ig-header-title">…</h1></header>`

#### Scenario: Full header
- **WHEN** an infographic has a title, subtitle, and metadata (date/status/tags)
- **THEN** all three elements SHALL appear in order: title, subtitle, meta

### Requirement: Page max-width and centering
The `ig-page` container SHALL constrain content to a readable max-width and
center it horizontally on wide viewports.

#### Scenario: Wide viewport
- **WHEN** the viewport is wider than the content max-width
- **THEN** the infographic content SHALL be horizontally centered with equal margins
