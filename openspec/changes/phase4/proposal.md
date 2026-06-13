## Why

Phase 3 gives the repository canonical HTML fixtures, but there is still no dedicated skill that tells an LLM how to choose a pattern, use the approved classes, and copy the examples correctly. Without that guide, the library remains easy to misuse even though the contract and fixtures are now in place.

## What Changes

- Add a companion skill for the infographic CSS library that documents pattern selection, class usage, and usage constraints.
- Point the skill at the canonical examples so an LLM can copy a correct starting point without reading implementation code.
- Keep the skill strictly informational: no conversion workflow, no planner behavior, and no automatic source-to-artifact transformation.

## Capabilities

### New Capabilities
- `companion-skill`: documentation-only skill that explains when to use each pattern, how to use the class contract, and where to find copy-ready examples

### Modified Capabilities
- 

## Impact

- Adds a new skill file under `skills/` for the infographic CSS library.
- Links the skill to the canonical example set from Phase 3.
- Reinforces the library’s static, zero-JavaScript, zero-converter scope without changing `infographic.css`.
