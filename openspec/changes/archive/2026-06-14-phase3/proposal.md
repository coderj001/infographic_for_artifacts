## Why

Phase 2 gives the library a stable CSS contract, but Phase 3 still needs a canonical HTML corpus that shows the contract in use. Without copy-ready fixtures, an LLM has to infer the correct structure from CSS alone, which raises the risk of invalid class combinations and ambiguous markup.

## What Changes

- Add canonical HTML example files for the page shell, all six pattern families, and the reusable callout component.
- Keep each example self-contained, readable, and linked to the shared `infographic.css` file.
- Document the fixture set so it is obvious which example demonstrates which contract surface.

## Capabilities

### New Capabilities
- `canonical-examples`: canonical HTML fixtures that demonstrate the page shell, each family, and reusable callout usage

### Modified Capabilities
- 

## Impact

- `examples/` gains the canonical HTML fixture set and supporting documentation.
- `examples/README.md` should reflect the final fixture inventory and their purpose.
- No CSS contract changes are expected; this phase documents and demonstrates the existing contract.
