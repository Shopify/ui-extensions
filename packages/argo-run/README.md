# `argo-run`

This package provides a command line interface for developing and building Argo extensions.

## Installation

```bash
$ yarn add @shopify/argo-run --dev
```

## Usage

This package will add a `argo-run` binary to your project. You can execute this binary directly, or through yarn:

```bash
$ node_modules/.bin/argo-run <command>
$ yarn argo-run <command>
```

### `argo-run dev`

> alias: `argo-run serve`

```bash
$ yarn argo-run dev
```

This command will start a local development server for your extension. This development server, based on [`webpack-dev-middleware`](https://github.com/webpack/webpack-dev-middleware), will serve the JavaScript file for your extension, and will recompile it as you make changes to your codebase.

This command will print the `localhost` address of the asset server when it starts up. To control the port the server will bind to, you can pass the `--port` flag:

```bash
$ yarn argo-run dev --port 3000
```

Default entry file for your extension is `index.{ts,tsx,js}` or `src/index.{ts,tsx,js}`. To control the entry file, you can pass the `--entry` flag:

```bash
$ yarn argo-run dev --entry ./custom/entry/file.ts
```

If there is a website that can load a preview of your extension, this command can automatically navigate your browser to that page on start. To do so, pass a `--open` flag with the URL to navigate to:

```bash
$ yarn argo-run dev --open https://argogogo.dev
```

This command will open your default browser to the `open` URL, with an `extension` query parameter set to a JSON-stringified version of the extension asset’s URL. Additionally, if you pass an `--extension-point` flag to this command, it will be forwarded as an `extension-point` query parameter when the URL is opened in a browser.

The most complex example might look something like this:

```bash
$ yarn argo-run dev --open https://argogogo.dev --extension-point Checkout::PostPurchase::ShouldRender
```

Which would open your default browser to a the following URL, assuming the default asset server port is available:

```
https://argogogo.dev?extension=%2522http%253A%252F%252Flocalhost%253A8910%252Fassets%252Fextension.js%2522&extension-point=Checkout::PostPurchase::ShouldRender
```

### `argo-run build`

```bash
$ yarn argo-run build
```

This command will run your extension through [webpack](https://webpack.js.org) to produce a highly-optimized asset. Once generated, the estimated size of the asset will be printed to the console.

The extension asset will be placed in the `build` directory adjacent to the directory in which you ran the command. By default, its name will be `main.js`, but this can be customized using the `--filename` flag:

```bash
$ yarn argo-run build --filename extension.js
```

To control the whole output directory, you can pass the `--ouptut` flag:

```bash
$ yarn argo-run build --output ./custom/output/directory/extension.js
```

To control the entry file, you can pass the `--entry` flag:

```bash
$ yarn argo-run build --entry ./custom/entry/file.ts
```

To watch the build file for changes, you can pass the `--watch` flag:

```bash
$ yarn argo-run build --watch
```
