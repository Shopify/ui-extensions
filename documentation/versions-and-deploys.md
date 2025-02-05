# Versions and deploys

Shopify’s UI extensions are a [versioned API](https://shopify.dev/api/usage/versioning). New versions are released every 3 months at the beginning of the quarter, and have version identifiers in the format `YYYY-MM`. For each of these versions, there is a corresponding branch in this repository that is used to publish UI extension packages with a matching version number.

## RC

Whenever a new stable version is released we also create a release-candidate (RC) branch for the next stable version. For example, `2025-01` is created at the same time as `2025-04-rc` and is used for previewing `2025-04` before it is promoted to stable. These branches publish UI extension packages using a special `0.0.0-{{BRANCH_NAME}}-{{TIMESTAMP}}` (ex. `0.0.0-2025-04-rc-20250205201123`) version number, which allows us to release continuously as changes are made. RC branches are stricter than `unstable` and we should try to avoid including APIs that are not finalized.

## Unstable

The [`unstable` branch](https://github.com/Shopify/ui-extensions/tree/unstable) is used to build experimental features before they are promoted to an RC. This version is meant to allow third parties to try out experimental extension APIs before they are released for use in production environments. This branch publishes UI extension packages using a special `0.0.0-unstable-{{TIMESTAMP}}` version number, which allows us to release it continuously as changes are made.

> **Note**: Shopify also released a set of UI extension packages that had NPM versions, but did not follow a formal API versioning system. These packages, like `@shopify/checkout-ui-extensions` and `@shopify/admin-ui-extensions`, are still available, but are on a [“legacy” branch](https://github.com/Shopify/ui-extensions/tree/main). If you are trying to deploy new versions of those packages, the instructions in this document **do not apply**.

## Adding code

Most code added to this repo will be added to the `unstable` branch, which captures the latest public APIs Shopify has made available. Code changes should only be added to RC branches when we're confident the API is unlikely to change. Stable version branches should only be getting bugfixes (`patches`) — no new features should be added to them.

To start adding code, branch off of the `unstable` branch (or the branch for the version you’re working on). Make your changes as you normally would. Before creating a PR for your work, though, you will need to run a command to generate a [changeset](https://github.com/changesets/changesets):

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

When changeset files are detected on any of the stable version branches, a GitHub action will create a new PR that merges all the unpublished changesets together into a single changelog, and increments the version number on updated packages. This PR should be reviewed and merged by a member of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards). Once it is merged, the new package versions will automatically be published to NPM, with a tag corresponding to their API version (for example, `yarn add @shopify/ui-extensions@2023-01` will install the latest package version for the `2023-01` API version).

The `unstable` and RC branches do not have the additional step of creating a PR to merge changesets “on-demand”. Instead, _every_ merge into the branches causes a new set of versions to be published to NPM. A GitHub action watches this branch and, when any changes are detected, it will create a [“snapshot release”](https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md) that publishes the changed packages as they exist at that point in time. Snapshot versions a unique timestamp and are published to NPM with a tag (`unstable` for unstable or `*-rc` for RC versions). This allows developers to get the latest `unstable` or an RC version of a package by running an install command referencing the tag, like `yarn add @shopify/ui-extensions@unstable` or `yarn add @shopify/ui-extensions@2025-04-rc`.

## Creating new stable versions

> **Note:** only members of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards) should create new stable versions.

To create a new stable version, you will need to follow these steps:

1. Create a new branch for the calver version. This branch should be named with the format `YYYY-MM` where the month should be `01`, `04`, `07`, or `10` (we release quarterly). You will branch off of `YYYY-MM-rc` to create this branch. For example, if you're release `2025-04` you should branch off of `2025-04-rc`.
1. Push your new branch to GitHub. This will trigger the GitHub action that creates a new PR to consume all the changesets you copied over from `2025-04-rc` into your new version.
1. Pull down the branch that that was created by the GitHub action (it should have the name `changeset-release/{{BRANCH_NAME}}`). Instead of the patch version changes that were made by the action, update the version of all packages manually to be the first patch release of a new version range. For example, if you are creating a `2025-04` API version, you will set the package versions of all packages to `2025.4.0`. Apply this change to `packages/ui-extensions/package.json` and `packages/ui-extensions/CHANGELOG.md`.
   > Note: do not update the root-level `package.json`.
1. Push your new changes, and make sure you get the PR reviewed by one other member of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards).
1. Update the [`LATEST_STABLE_VERSION`](https://github.com/Shopify/ui-extensions/settings/variables/actions) repository variable to your stable version (i.e. `2025-04`). This ensures means it will be marked with a `latest` npm dist-tag on NPM.
1. Merge the PR, and let robots release the new versions to NPM and tag it appropriately.
1. Create a new RC branch for the next stable release off of the current stable release. For example, if you've release `2025-04` you should create a new branch `2025-07-rc` off of `2025-04`.
1. For any changes from `unstable` that have been incorporated into the new version, delete their changeset files on the `unstable` branch and replace the existing `CHANGELOG.md` files in `unstable` with what was just shipped.
1. Send a message announcing the release. Let teams know that now is the time to update their section's docs and CLI templates.
