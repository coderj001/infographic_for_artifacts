## ADDED Requirements

### Requirement: Documentation-only skill
The skill SHALL document how to use the infographic CSS library and SHALL NOT claim to convert source documents, plan layouts automatically, or generate CSS implementation code.

#### Scenario: User asks for automatic conversion
- **WHEN** a user asks the skill to transform a source document into infographic markup
- **THEN** the skill states that conversion is out of scope and directs the user to the documented patterns and examples

### Requirement: Pattern selection guidance
The skill SHALL explain what each approved pattern family is for and SHALL help the user choose the closest family for the content they want to express.

#### Scenario: User needs a family choice
- **WHEN** a user describes content that could fit multiple infographic patterns
- **THEN** the skill identifies the best-fitting family and briefly explains why it is the closest match

### Requirement: Canonical example references
The skill SHALL point the user to the canonical example files created in Phase 3 and SHALL identify which example demonstrates the page shell, each family, and the reusable callout component.

#### Scenario: User asks for a template
- **WHEN** a user wants a copy-ready starting point
- **THEN** the skill links or names the canonical example file that matches the requested pattern

### Requirement: Usage constraints
The skill SHALL state the library constraints that matter for LLM authorship, including zero JavaScript, zero external dependencies, one visual theme for v1, and the requirement to keep a single family per page.

#### Scenario: User proposes unsupported behavior
- **WHEN** a user asks for interactivity, external fonts, or multiple families on one page
- **THEN** the skill explains that the request is out of scope for the library and gives the nearest supported alternative

### Requirement: Copy-ready guidance
The skill SHALL present the guidance in a form that can be reused directly as a template, including concise usage notes and example pointers instead of long narrative prose.

#### Scenario: User reads the skill without implementation code
- **WHEN** a user opens the skill to write a new infographic page
- **THEN** the skill provides enough structure to select a pattern and locate the correct example without consulting the CSS source
