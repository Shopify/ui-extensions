---
name: ui-extensions-style-lint
description: Use when validating any documentation update in the ui-extensions repo. Covers mechanical text checks: contractions, punctuation, bolding, backtick usage, capitalization, file references, and orphaned files. Always run first on any PR, regardless of page type.
---

# Style Lint (All Page Types)

**How to use:** Scan the changed files mechanically against each rule below. These are objective pass/fail checks — no judgment needed. Skip items that clearly don't apply to this file type. Flag anything you can't verify rather than guessing.

## Contractions

- [ ] Use contractions throughout: don't, isn't, won't, they're, it's, you'll, we've

## Punctuation

- [ ] All bullet points end with a period
- [ ] Straight quotes `"` not curly quotes `"` or `"`

## Formatting

- [ ] **Bolding**: Colon goes outside the bold span → `**word**:` not `**word:**`
- [ ] **Code, paths, filenames, values, props, endpoints**: All wrapped in backticks → `` `propName` ``, `` `src/index.ts` ``, `` `true` ``

## Capitalization

- [ ] Extension types include the domain, lowercased: _checkout UI extension_, _customer account UI extension_
- [ ] "Shopify CLI", not "the CLI"
- [ ] **"checkout" and "customer account" are lowercase in prose.** The only valid exceptions are:

  - First word of a sentence in rendered text (e.g., "Checkout UI extensions let you...")
  - First word of a heading or document title
  - **Not** valid exceptions: string values, property values, alt text, code comments, or any context where it begins a string but isn't genuinely the start of rendered prose

  > **Example:** `altText="Checkout image"` is wrong even though "Checkout" starts the string. Use `altText="checkout image"` or rephrase to avoid capitalizing it.

## File References

- [ ] All files referenced in `codeblock.tabs` exist in the `examples/` folder
- [ ] No orphaned example files (files exist in `examples/` but aren't referenced anywhere)

## Final Checks

- [ ] Run `yarn lint` and fix any errors introduced

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
