# Argo for Checkout

This repo contains a collection of packages for using Shopify’s Argo for Checkout. Which one you read depends on the extension you are building:

- If you’re building an extension for the main checkout flow, you’ll need to read [`@shopify/argo-checkout`](packages/argo-checkout), which has all of the typings for the API available to Argo extensions in checkout. It also has documentation for the available [global API](packages/argo-checkout/documentation/globals.md), [extension points](packages/argo-checkout/documentation/extension-points.md), and [components](packages/argo-checkout/documentation/components.md).
- If you’re building a post-purchase extension, the package you need to care about is [`@shopify/argo-post-purchase`](packages/argo-post-purchase), which contains the same documentation noted above for the post-purchase extension points.

This repo also has some of the helper packages Shopify uses to make Argo extensions easy to develop and deploy:

<<<<<<< HEAD
- [`@shopify/argo-run`](packages/argo-run) is a tiny asset dev server and production asset builder, powered by [webpack](https://webpack.js.org)
- [`@shopify/argo-webpack-hot-client`](packages/argo-webpack-hot-client) is an Argo-compatible replacement for [webpack-hot-client](https://github.com/webpack-contrib/webpack-hot-client) that enables auto-reloading in Argo extensions.
=======
| Package                                                   |                                  Description                                   |
| --------------------------------------------------------- | :----------------------------------------------------------------------------: |
| [argo-admin](./packages/argo-admin/README.md)             | Enables devs to write custom JS to be exposed within a Shopify-controlled host |
| [argo-admin-react](./packages/argo-admin-react/README.md) |     Built on top of Argo Admin; allows a devs to write React-style scripts     |
| [argo-host](./packages/argo-host/README.md)               |                    A mock host that renders Argo components                    |
| [argo-playground](./packages/argo-playground/README.md)   |             A demo environment used for internal Argo development              |

## Development quick start

Run the following commands to get started:

```bash
$ dev clone app-extension-libs              # clone git repository
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
