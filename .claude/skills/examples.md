---
name: ui-extensions-examples
description: Use when a PR touches example files in the ui-extensions repo. Covers example description quality, title conventions, accessibility attributes, uniqueness, and real-world usefulness. Only invoke when example files are changed — skip for type definition or API-only changes.
---

# Example Validation

**How to use:** Apply judgment, not mechanical scanning. The automated example validation script in this repo already checks syntax and rendering — don't duplicate that. This skill covers what the script can't: whether examples are _useful_, _unique_, and _well-described_.

**When to invoke:** Only when the PR includes changes to `examples/` files. Skip this skill for PRs that only change `.d.ts`, `.doc.ts` metadata fields, or non-example assets.

## Example Descriptions (2-Sentence Pattern)

Each example's `description` field must follow this pattern:

- **Sentence 1**: What it does / user benefit. Use an action-oriented verb. Don't start with "This example".
- **Sentence 2**: What this specific example demonstrates. Start with "This example [verb]...".

**Good:**

> "Focus merchant attention on a critical decision before proceeding. This example presents a delete confirmation with cancel and confirm buttons."

**Avoid:**

> "This example shows a modal." — single sentence, starts with "This example shows", no user benefit

## Example Titles

- [ ] Action-oriented verbs: "Confirm a merchant action", "Navigate to App Store"
- [ ] Avoid: "Default", "Basic", or just the page name
- [ ] Remove lead-ins like "Basic:"

## Example Files (Accessibility)

The script checks syntax. These must be checked manually:

- [ ] Form fields include a `details` attribute with an accessible description
- [ ] Interactive elements include `accessibilityLabel`

## Example Quality

**What to check (judgment required):**

### Uniqueness

- [ ] No two examples demonstrate the same functionality
- [ ] If examples look similar, each has a clear differentiating purpose explained in the description
- [ ] If an example only changes one prop value from another, consider whether they should be consolidated

### Usefulness

- [ ] Each example shows a real-world scenario, not just a minimal property demo
- [ ] Examples are complex enough to be copy-paste useful — not just `<s-button>Click</s-button>`
- [ ] Examples show what the component is actually for, not edge-case configurations

### Content

- [ ] No placeholder text (Lorem ipsum, TODO, sample text, etc.)

## Live Schema Validation

Use `mcp__shopify-dev-mcp__validate_component_codeblocks` to verify example HTML against the live component schema. This catches invalid component names, wrong props, and bad prop values that may not be caught by the local build script.

- Pass `api: 'polaris-checkout-extensions'` or `'polaris-customer-account-extensions'` depending on the surface
- Requires a `conversationId` from `mcp__shopify-dev-mcp__learn_shopify_api`

## What the Script Already Checks (Don't Repeat)

The repo's automated validation script covers:

- Syntax errors
- Import resolution
- Required fields presence

Don't flag these in your validation report — the script will catch them on build.

---

## Output Format

```
## Validation Report

### What's good
- [passing items]

### Needs attention
- [items that may need work]

### Must fix
- [items that must be fixed before merging]

### Recommendation
[Ready to merge / Needs changes / Major revision needed]
```
