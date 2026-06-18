# Admin UI extensions docs sync workflow

Admin UI extensions API docs are generated from this repository, usually from the quarterly API branch for the version being published, such as `2026-04`. The generated Admin docs are copied into `shopify-dev` under `db/data/docs/templated_apis/admin_extensions/<version>`.

## Safe order of operations

Run the App Bridge docs sync from `Shopify/extensibility` last. This is important because `yarn docs:admin` also writes the App Home docs data at `db/data/docs/templated_apis/app_home/generated_docs_data_v2.json`. The Extensibility sync merges and preserves the App Bridge and Polaris component docs for App Home in that file. If `yarn docs:admin` runs after Extensibility `docs:sync`, it can overwrite the merged App Home data and remove those App Bridge and Polaris component docs.

Use this order:

1. Generate Admin UI extensions docs from `Shopify/ui-extensions` for the target API version.
2. Copy or promote the generated Admin docs into `shopify-dev` as needed.
3. From `Shopify/extensibility`, run `pnpm --dir libraries/javascript/app-bridge docs:sync <version>`.
4. If Admin docs generation is rerun afterward for the same version, rerun the Extensibility `docs:sync` command afterward too.

## Example for `2026-04`

Run Admin docs generation first:

```bash
cd /Users/mitch/src/github.com/Shopify/ui-extensions
git checkout 2026-04
yarn workspace @shopify/ui-extensions docs:admin 2026-04 2026-04
```

Copy or promote the generated Admin docs in `shopify-dev` as needed. The final Admin docs should live under `db/data/docs/templated_apis/admin_extensions/2026-04`.

Then run the Extensibility App Bridge docs sync last:

```bash
cd /Users/mitch/src/github.com/Shopify/extensibility
pnpm --dir libraries/javascript/app-bridge docs:sync 2026-04
```

If you run `yarn workspace @shopify/ui-extensions docs:admin 2026-04 2026-04` again later, run `pnpm --dir libraries/javascript/app-bridge docs:sync 2026-04` again afterward so `app_home/generated_docs_data_v2.json` keeps the merged App Bridge and Polaris component docs.
