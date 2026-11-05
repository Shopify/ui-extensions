# Admin UI extensions docs sync workflow

Admin UI extensions API docs are generated from this repository, usually from the quarterly API branch for the version being published, such as `2026-04`. The generated Admin docs are copied into `shopify-dev` under `db/data/docs/templated_apis/admin_extensions/<version>`, and the App Home UI extension copy under `db/data/docs/templated_apis/app_home_ui_extension/<version>`.

`pnpm docs:admin` doesn't generate App Home docs. App Home's Polaris web components data is generated in World by `pnpm sync:app-home-docs --version <docs version>` in `areas/platforms/shopify-dev`, from the Polaris release commit in the CDN manifest, so the order in which you run this and the App Bridge docs sync doesn't matter.

## Example for `2026-04`

```bash
cd /Users/mitch/src/github.com/Shopify/ui-extensions
git checkout 2026-04
pnpm --filter @shopify/ui-extensions docs:admin 2026-04 2026-04
```

Copy or promote the generated Admin docs in `shopify-dev` as needed. The final Admin docs should live under `db/data/docs/templated_apis/admin_extensions/2026-04`.
