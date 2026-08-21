# AGENTS.md

After every change, you must:

1. **Run `yarn build`** — rebuild any changed packages.
2. **Run relevant tests** — ensure all affected test suites pass. Read ./CONTRIBUTING.md for how to run tests.
3. **Check for type errors** — run the TypeScript compiler to verify there are no type errors.
4. **Check for lint and formatting errors** — run the linter and formatter to ensure code quality.

## Changesets and versioning

Package versions are **calendar versions**: the `major.minor` of the npm
version _is_ the Shopify API version (`2026.10.x` → API version `2026-10`,
derived at build time — see `packages/ui-extensions-tester/src/api-version.ts`).

- **Never mark a changeset `major`.** A major bump rolls the calendar year
  (`2026.10.0` → `2027.0.0` → API version "2027-00", which doesn't exist),
  breaks the tester's version check on every PR, and publishes an RC that is
  semver-higher than the branch's own final release. Breaking changes are
  already gated by API version; declare them `minor` and describe the break in
  the changeset text.
- On RC branches (`.changeset/pre.json` present), released changeset files are
  **retained** and keep contributing to version computation until pre-mode
  exits — correcting a bad version requires fixing the changeset file itself,
  not just `package.json`.

## ui-extensions-tester

When working on `ui-extensions-tester`, ALWAYS read [packages/ui-extensions-tester/AGENTS.md](packages/ui-extensions-tester/AGENTS.md).
