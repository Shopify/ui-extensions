# Versions and deploys

Shopify’s UI extensions are a [versioned API](https://shopify.dev/api/usage/versioning). New versions are released every 3 months at the beginning of the quarter, and have version identifiers in the format `YYYY-MM`. For each of these versions, there is a corresponding branch in this repository that is used to publish UI extension packages with a matching version number.

The following versions are currently supported:

- `2023-04` ([branch](https://github.com/Shopify/ui-extensions/tree/2023-04), publishes versions `2023.4.x`)

There is also an `unstable` API version published from the [`unstable` branch](https://github.com/Shopify/ui-extensions/tree/unstable). This version is meant to allow third parties to try out new, upcoming extension APIs, before they are released for use in production environments. This branch publishes UI extension packages using a special `0.0.0-unstable-{{TIMESTAMP}}` version number, which allows us to release it continuously as changes are made.

> **Note**: Shopify also released a set of UI extension packages that had NPM versions, but did not follow a formal API versioning system. These packages, like `@shopify/checkout-ui-extensions` and `@shopify/admin-ui-extensions`, are still available, but are on a [“legacy” branch](https://github.com/Shopify/ui-extensions/tree/main). If you are trying to deploy new versions of those packages, the instructions in this document **do not apply**.

## Adding code

Most code added to this repo will be added to the `unstable` branch, which captures the latest public APIs Shopify has made available. Stable version branches should only be getting bugfixes (`patches`) — no new features should be added to them.

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

The `unstable` branch does not have the additional step of creating a PR to merge changesets “on-demand”. Instead, _every_ merge into `unstable` causes a new set of versions to be published to NPM. A GitHub action watches this branch and, when any changes are detected, it will create a [“snapshot release”](https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md) that publishes the changed packages as they exist at that point in time. Snapshot versions have the format `0.0.0-unstable-{{TIMESTAMP}}`, and are published to NPM with the `unstable` tag. This allows developers to get the latest `unstable` version of a package by running an install command referencing the `unstable` tag, like `yarn add @shopify/ui-extensions@unstable`.

Like the `unstable` branch, the `internal` branch also publishes snapshot releases to NPM. These releases are identified by the format `0.0.0-internal-{{TIMESTAMP}}` and are published with the `internal` tag.

## Creating new stable versions

> **Note:** only members of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards) should create new stable versions.

To create a new stable version, you will need to follow these steps:

1. Add the new stable calver version `YYYY-MM` to the list of watched branches in the [`changesets-reminder`](https://github.com/Shopify/ui-extensions/blob/unstable/.github/workflows/changesets-reminder.yml) and [`deploy`](https://github.com/Shopify/ui-extensions/blob/unstable/.github/workflows/deploy.yml) GitHub actions.
1. Create a new branch for the calver version you set from the previous step. This branch should be named with the format `YYYY-MM`. You will likely branch off of `unstable` to create this branch.
1. Push your new branch to GitHub. This will trigger the GitHub action that creates a new PR to consume all the changesets you copied over from `unstable` into your new version.
1. Add a [branch protection rule](https://github.com/Shopify/ui-extensions/settings/branches) for your branch, following the other branch rules.
1. Pull down the branch that that was created by the GitHub action (it should have the name `changeset-release/{{BRANCH_NAME}}`). Instead of the patch version changes that were made by the action, update the version of all packages manually to be the first patch release of a new version range. For example, if you are creating a `2025-01` API version, you will set the package versions of all packages to `2025.1.0`. Apply this change to `packages/ui-extensions/package.json`, `packages/ui-extensions/CHANGELOG.md`, `packages/ui-extensions-react/package.json`, and `packages/ui-extensions-react/CHANGELOG.md`. Note: do not update the root-level `package.json`.
1. Push your new changes, and make sure you get the PR reviewed by one other member of the [UI Extension Stewards GitHub team](https://github.com/orgs/Shopify/teams/ui-extension-stewards). Make sure to check with all teams with changes included to make sure those changes are ready to release.
1. Update the [`LATEST_STABLE_VERSION`](https://github.com/Shopify/ui-extensions/settings/variables/actions) repository variable to your stable version (i.e. `2025-01`). This ensures means it will be marked with a `latest` npm dist-tag on NPM.
1. Merge the PR, and let robots release the new versions to NPM and tag it appropriately.
1. For any changes from `unstable` that have been incorporated into the new version, delete their changeset files on the `unstable` branch and replace the existing `CHANGELOG.md` files in `unstable` with what was just shipped.
1. Send a message announcing the release. Let teams know that now is the time to update their section's docs and CLI templates.
