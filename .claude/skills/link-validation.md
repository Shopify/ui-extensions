---
name: ui-extensions-validate-links
description: Use when validating that documentation links in the ui-extensions repo point to real pages on shopify.dev. Run separately from other validation skills due to MCP tool overhead.
---

# Link Validation

Validates that documentation links point to real shopify.dev pages. This skill uses MCP tools and adds time to validation — run it separately from content validation skills.

**How to use:** For each link found in the files provided, use `mcp__shopify-dev-mcp__search_docs_chunks` to locate the page, then `mcp__shopify-dev-mcp__fetch_full_docs` to confirm the path exists and that the linked content is actually there. Verify the path is correct for the surface being documented (admin, checkout, customer account).

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
