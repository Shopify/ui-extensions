# Versions and deploys

Shopify’s UI extensions are a [versioned API](https://shopify.dev/api/usage/versioning). New versions are released every 3 months at the beginning of the quarter, and have version identifiers in the format `YYYY-MM`. For each of these versions, there is a corresponding branch in this repository that is used to publish UI extension packages with a matching version number.

## RC

Whenever a new stable version is released we also create a release-candidate (RC) branch for the next stable version. For example, `2025-01` is created at the same time as `2025-04-rc` and is used for previewing `2025-04` before it is promoted to stable. The latest RC branch is where active development happens (see [Adding code](#adding-code)). To keep RC branches stable, avoid merging APIs that are not yet finalized directly into an RC — do that work on a feature branch first. These branches publish UI extension packages using a special `{{SEMVER}}-rc.{{VERSION}}` (ex. `2025.10.0-rc.5`) version number, which allows us to release continuously without bumping the semver. Changesets merged into RC branches will trigger a PR to be created for [deploying the package to NPM](#deploying-new-versions-to-npm).

## Unstable (deprecated)

> **Deprecated**: The [`unstable` branch](https://github.com/Shopify/ui-extensions/tree/unstable) is deprecated and frozen at `2025-07`. It still runs on [`remote-ui`](https://github.com/Shopify/remote-ui), which the rest of the repo has since moved away from, so it can't be updated without breaking extensions that still run on it. Don't branch off it or target it with new work — branch off the latest RC branch instead (see [Adding code](#adding-code)).

> **Note**: Shopify also released a set of UI extension packages that had NPM versions, but did not follow a formal API versioning system. These packages, like `@shopify/checkout-ui-extensions` and `@shopify/admin-ui-extensions`, are still available, but are on a [“legacy” branch](https://github.com/Shopify/ui-extensions/tree/main). If you are trying to deploy new versions of those packages, the instructions in this document **do not apply**.

## Adding code

Most code added to this repo will be added to the latest RC branch, which captures the latest public APIs Shopify has made available. New and experimental work happens against the latest RC: until an API is finalized, do that work on a feature branch and only merge it into the RC once you're confident the API is unlikely to change. Stable version branches should only be getting bugfixes (`patches`) — no new features should be added to them.

To start adding code, branch off of the latest RC branch (or the branch for the version you’re working on) to create a feature branch. Make your changes as you normally would. Before creating a PR for your work, though, you will need to run a command to generate a [changeset](https://github.com/changesets/changesets):

```bash
yarn changeset
```

This command will ask you what packages you have updated, and what kind of changes you have made. Select the appropriate packages, and determine if your changes are `minor` or a `patch`.

- `minor`: new features
- `patch`: bug fixes, documentation updates, and other small changes to existing features

The `changeset` command will then ask you for a short description of your change. Please try to make the description clear and helpful for other developers attempting to understand the changes you have made. Once you commit your description, the command will create a markdown file in the `.changeset` directory at the root of this repo, which contains the details you provided. If your change needs additional detail (for example, you want to show code examples or migration instructions), you can add that content to the markdown file. The contents of these files will be “consumed” when we publish the next version of the package, and will be used to generate a changelog for the packages you changed.

Commit your changeset file alongside the rest of the changes you are making — the code and changeset should be reviewed as part of the same PR.

> **Note**: If your PR changes several things, consider separate changesets for each commit.

## Deploying new versions to NPM

When changeset files are detected on any of the stable version or RC branches, a GitHub action will create a new PR that merges all the unpublished changesets together into a single changelog, and increments the version number on updated packages. This PR on stable branches should be reviewed and merged by a member of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards). Once it is merged, the new package versions will automatically be published to NPM, with a tag corresponding to their API version (for example, `yarn add @shopify/ui-extensions@2023-01` will install the latest package version for the `2023-01` API version).

## Creating new stable versions

> **Note**: only members of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards) should create new stable versions.

Before you start, make sure the latest RC branch contains everything that should ship in the release:

- Check for open PRs targeting the latest RC branch. Anything that needs to be in the release has to be merged before you cut the stable branch.
- Check that changes merged into the current stable branch were forward-ported to the RC. PRs opened against the current stable branch are automatically given a `needs-rc-port` label, which is removed once a forward-port PR referencing them merges into the RC. Look for PRs that still carry it.

> **Note**: Don't merge new changes into the RC once you've started cutting the stable version.

To create a new stable version, you will need to follow these steps:

1. Create a new branch for the calver version. This branch should be named with the format `YYYY-MM` where the month should be `01`, `04`, `07`, or `10` (we release quarterly). You will branch off of `YYYY-MM-rc` to create this branch. For example, if you're release `2025-04` you should branch off of `2025-04-rc`.
1. Exit changeset pre mode by running `yarn changeset pre exit`, and commit the result. RC branches keep changesets in “pre” mode (the `mode` field in `.changeset/pre.json`), which is what produces the `{{SEMVER}}-rc.{{VERSION}}` version numbers. If you skip this step, the release will be published as another RC version instead of a stable one.
1. Push your new branch to GitHub. This will trigger the GitHub action that creates a new PR to consume all the changesets you copied over from `2025-04-rc` into your new version.
1. Pull down the branch that was created by the GitHub action (it should have the name `changeset-release/{{BRANCH_NAME}}`) and check the versions it generated. Exiting pre mode should collapse the RC version into the first patch release of the new version range — for example, `2025.4.0-rc.7` becomes `2025.4.0`. If the versions don't look like that, update the version of all packages manually to be the first patch release of a new version range. Apply this change to `packages/ui-extensions/package.json`, `packages/ui-extensions/CHANGELOG.md`, `packages/ui-extensions-tester/package.json`, and `packages/ui-extensions-tester/CHANGELOG.md`.
   > Note: do not update the root-level `package.json`.
1. Push your new changes, and make sure you get the PR reviewed by one other member of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards).
1. Update the [`LATEST_STABLE_VERSION`](https://github.com/Shopify/ui-extensions/settings/variables/actions) repository variable to your stable version (i.e. `2025-04`). This ensures it will be marked with a `latest` npm dist-tag on NPM.
   > Note: the GitHub action step that applies the `latest` dist-tag is [known to fail under OIDC authentication](https://github.com/npm/cli/issues/8547). If it does, ask #help-eng-infrastructure to set the `latest` tag manually.
1. Merge the PR, and let robots release the new versions to NPM and tag it appropriately.
1. Verify that the packages were actually published. The NPM dashboard serves stale data, so check from the command line instead: `npm info --userconfig=/dev/null @shopify/ui-extensions`. Confirm that both the new version and the `latest` tag are what you expect.
1. Update the surface templates in the [`extensions-templates`](https://github.com/Shopify/extensions-templates) repo to point at the new version.
1. Update the public documentation on `shopify.dev`.

## Creating the next RC branch

Once the new stable version has been released, create the RC branch for the next stable version:

1. Branch off of the stable version you just released. For example, if you released `2025-04` you should create a new branch `2025-07-rc` off of `2025-04`.
1. Enter changeset pre mode by running `yarn changeset pre enter rc`.
1. Check the `.changeset/pre.json` file the command generated. It should have `"tag": "rc"`, and the `initialVersions` for every package should be the first RC of the new version range (for example, `2025.7.0-rc.0`). Correct it by hand if it isn't.
1. Update the `version` in `packages/ui-extensions/package.json` and `packages/ui-extensions-tester/package.json` to match (for example, `2025.7.0-rc.0`).
1. Update the `@shopify/ui-extensions` dependency in `packages/ui-extensions-tester/package.json` to match (for example, `2025.7.0-rc.0`).
1. Add the new version to the `ApiVersion` and `StorefrontApiVersion` unions in `packages/ui-extensions/src/shared.ts`.
1. Run `yarn changeset`, select all packages, choose `major`, and use the description `2025-07-rc release`. Without a changeset the GitHub action has nothing to publish.
1. Commit your changes and push your new branch to GitHub. This will trigger the GitHub action that creates the release PR, the same way it does for stable branches.
1. Double-check the changes in the generated PR, push any adjustments to that branch, and merge it to publish the first RC version to NPM.
1. Update the public documentation on `shopify.dev`.
