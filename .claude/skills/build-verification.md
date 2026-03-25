---
name: ui-extensions-build-verification
description: Use when verifying that documentation changes generate correctly in the ui-extensions repo. Covers running docs generation commands, verifying generated JSON output, and previewing locally.
---

# Build & Preview Verification

**How to use:** Run the relevant command and report what you observe. Flag anything unexpected rather than guessing at the cause.

## Documentation Generation

Run the appropriate command for the surface you updated:

```bash
yarn docs:checkout
yarn docs:customer-account
```

- [ ] Command runs without errors
- [ ] Generated JSON (`generated_docs_data.json`) reflects your changes
- [ ] Preview locally to confirm rendering

## Generated Files

- [ ] Do **not** manually edit files in `generated/` directories
- [ ] Source `.d.ts` and `.doc.ts` files are the source of truth
- [ ] CI regenerates these files — verify your source changes produce expected output

---

## Output Format

```
## Verification Report

### What's good
- [passing items]

### Needs attention
- [items that may need work]

### Must fix
- [items that must be fixed before merging]

### Recommendation
[Ready to merge / Needs changes / Major revision needed]
```
