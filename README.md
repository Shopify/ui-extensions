<<<<<<< HEAD
# Argo for Checkout
=======
[![npm version](https://badge.fury.io/js/%40shopify%2Fargo-admin.svg)](https://badge.fury.io/js/%40shopify%2Fargo-admin)
[![Build status](https://badge.buildkite.com/3d67b165eddeb5e37f963740fddaf81e5091a0fa16f288a075.svg)](https://buildkite.com/shopify/argo-admin)
>>>>>>> 323968f (chore: rename app-extension-libs to argo-admin)

This repo contains a collection of packages for using Shopify’s Argo for Checkout. Which one you read depends on the extension you are building:

- If you’re building an extension for the main checkout flow, you’ll need to read [`@shopify/argo-checkout`](packages/argo-checkout), which has all of the typings for the API available to Argo extensions in checkout. It also has documentation for the available [global API](packages/argo-checkout/documentation/globals.md), [extension points](packages/argo-checkout/documentation/extension-points.md), and [components](packages/argo-checkout/documentation/components.md).
- If you’re building a post-purchase extension, the package you need to care about is [`@shopify/argo-post-purchase`](packages/argo-post-purchase), which contains the same documentation noted above for the post-purchase extension points.

<<<<<<< HEAD
This repo also has some of the helper packages Shopify uses to make Argo extensions easy to develop and deploy:
=======
[🧙🏼‍♀️ Team](https://vault.shopify.io/teams/2045-Argo/work?subteams=yes&order=progress_asc&page=first_25&progress=Think_Explore_Build_Ongoing) &middot;
[💬 Slack](https://shopify.slack.com/archives/C010KF5GM37) &middot;
[🐶 Datadog](https://shopify.datadoghq.com/dashboard/aai-xje-9vn/app-extensions-core-dashboard?from_ts=1606166147939&live=true&to_ts=1606252547939) &middot;
[⚓️ Shipit](https://shipit.shopify.io/shopify/argo-admin/production) &middot;
>>>>>>> 323968f (chore: rename app-extension-libs to argo-admin)

<<<<<<< HEAD
- [`@shopify/argo-run`](packages/argo-run) is a tiny asset dev server and production asset builder, powered by [webpack](https://webpack.js.org)
- [`@shopify/argo-webpack-hot-client`](packages/argo-webpack-hot-client) is an Argo-compatible replacement for [webpack-hot-client](https://github.com/webpack-contrib/webpack-hot-client) that enables auto-reloading in Argo extensions.
=======
| Package                                                   |                                  Description                                   |
| --------------------------------------------------------- | :----------------------------------------------------------------------------: |
| [argo-admin](./packages/argo-admin/README.md)             | Enables devs to write custom JS to be exposed within a Shopify-controlled host |
| [argo-admin-react](./packages/argo-admin-react/README.md) |     Built on top of Argo Admin; allows a devs to write React-style scripts     |
| [argo-host](./packages/argo-host/README.md)               |                    A mock host that renders Argo components                    |
| [argo-admin-playground](./packages/argo-admin-playground/README.md)   |  Sample extension scripts to showcase Argo Admin features          |

## Development quick start

Run the following commands to get started:

```bash
$ dev clone argo-admin                      # clone git repository
$ dev up                                    # prepare dependencies
$ dev server                                # start "playground"
$ dev open                                  # launch "playground" in default browser
```

### Add a new component

1. Initialize repo and generate a new component

```bash
$ dev up                                    # prepare dependencies
$ dev new-component <COMPONENT_NAME>        # add new component to both host and client
```

2. Update component index files.

### Adding new extension api

1. Run `dev up` - This initializes the repo
2. Run `dev new-extension-api EXTENSION_API_NAME` - This will add new extension api. Replace `EXTENSION_API_NAME` with the new extension name
>>>>>>> 5809986 (Update Readme.md)
