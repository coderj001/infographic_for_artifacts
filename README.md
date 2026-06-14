# infographic-css

One-command installer for the `artifacts-to-html` Codex skill and its bundled infographic stylesheet.

## Install

From a GitHub repository:

```bash
npx github:<user>/<repo> add .
```

If you have the repo locally:

```bash
npx infographic-css add
```

## What it installs

The `add` command copies:

- `skills/artifacts-to-html/SKILL.md`
- `skills/artifacts-to-html/infographic-css/infographic.css`

into:

- `./.codex/skills/artifacts-to-html/SKILL.md`
- `./.codex/skills/artifacts-to-html/references/infographic.css`

## Package entrypoint

The package exposes a single CLI:

- `infographic-css add [target-dir]`

The target defaults to the current directory.
