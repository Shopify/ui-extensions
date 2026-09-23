---
'@shopify/ui-extensions': minor
---

Add `version` to the POS Extension API. `shopify.extension.version` is the name of the published app version that the running extension was deployed in — the same name shown on the Versions page of the dev dashboard, and the name chosen when running `shopify app deploy`. Use it to tell which build of an extension a merchant is running, which POS can cache and run offline for some time after a newer version is deployed. It's an opaque name rather than a version number, so compare it for equality. It's `undefined` when the extension runs from a local development server, because a build that hasn't been deployed has no published version.
