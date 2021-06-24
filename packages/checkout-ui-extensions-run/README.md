# `checkout-ui-extensions-run`

This package provides a command line interface for developing and building Checkout UI Extensions.

## Installation

```bash
$ yarn add @shopify/checkout-ui-extensions-run --dev
```

## Usage

This package will add a `checkout-ui-extensions-run` binary to your project. You can execute this binary directly, or through yarn:

```bash
$ node_modules/.bin/checkout-ui-extensions-run <command>
$ yarn checkout-ui-extensions-run <command>
```

### `checkout-ui-extensions-run dev`

> alias: `checkout-ui-extensions-run serve`

```bash
$ yarn checkout-ui-extensions-run dev
```

This command will start a local development server for your extension. This development server, based on [`webpack-dev-middleware`](https://github.com/webpack/webpack-dev-middleware), will serve the JavaScript file for your extension, and will recompile it as you make changes to your codebase.

This command will print the `localhost` address of the asset server when it starts up. To control the port the server will bind to, you can pass the `--port` flag:

```bash
$ yarn checkout-ui-extensions-run dev --port 3000
```

### Browser extension and `/data` endpoint

During development, the dev server exposes a `/data` endpoint which serves the `api_key` entry of the `.env` file and a json-parsed version of the `extension.config.yml`.

This endpoint is consumed by a browser extension, that we share with partners, which makes it easier to test locally developed post purchase extensions.

### `checkout-ui-extensions-run build`

```bash
$ yarn checkout-ui-extensions-run build
```

This command will run your extension through [webpack](https://webpack.js.org) to produce a highly-optimized asset. Once generated, the estimated size of the asset will be printed to the console.

The extension asset will be placed in the `build` directory adjacent to the directory in which you ran the command. By default, its name will be `main.js`, but this can be customized using the `--filename` flag:

```bash
$ yarn checkout-ui-extensions-run build --filename extension.js
```
