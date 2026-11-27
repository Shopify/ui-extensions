---
'@shopify/ui-extensions': patch
---

Move `ts-morph` from `dependencies` to `devDependencies`. It is used only by the package's build-time type generation (`packages/ui-extensions/buildTargetDts.ts`, called from `packages/ui-extensions/loom.config.ts`), so it is no longer installed for consumers, along with its transitive dependencies such as `@ts-morph/common`, `minimatch` and `fast-glob`.
