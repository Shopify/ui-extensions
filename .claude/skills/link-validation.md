---
name: ui-extensions-validate-links
description: Use when validating that documentation links in the ui-extensions repo point to real pages on shopify.dev. Run separately from other validation skills due to MCP tool overhead.
---

# Link Validation

Validates that documentation links point to real shopify.dev pages. This skill uses MCP tools and adds time to validation — run it separately from content validation skills.

**How to use:** For each link found in the files provided, verify the path exists and is correct for the surface being documented (admin, checkout, customer account).

- Use `mcp__shopify-dev-mcp__search_docs_chunks` to find a page when you're not sure of the exact path.
- Use `mcp__shopify-dev-mcp__fetch_full_docs` when you have a candidate path and need to confirm the page exists and that the linked section or content is actually there.

Use both tools together: search to locate, fetch to confirm.

## What to Check

- [ ] Tutorial links in API descriptions (e.g., links after "The [API Name] API lets you...")
- [ ] Resource links in component descriptions
- [ ] Links in `requires` fields of `.doc.ts` files
- [ ] Links to related APIs/components in example descriptions
- [ ] Links in `subSections` (best practices, limitations) pointing to workarounds or alternatives
- [ ] Links to child component docs in slot descriptions

## What NOT to Check

- `{API_VERSION}` and `{API_NAME}` placeholders — these are resolved at build time, don't try to expand them
- Relative anchors within the same page
- MDN links — flag these for human review instead of verifying

## Common Issues

- Admin-specific paths used on checkout or customer account pages
- Hardcoded version numbers instead of `{API_VERSION}` placeholder
- Links to pages that were moved or renamed

---

## Output Format

```markdown
## Link Validation Report

### Valid links
- [list of verified links]

### Broken or suspicious
- [link] — [reason: not found / wrong surface / hardcoded version]

### Flagged for human review
- [link] — [reason: MDN link / can't verify / ambiguous]
```
