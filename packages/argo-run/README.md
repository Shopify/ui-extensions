# `argogogo-run`

This package provides a command line interface for developing and building Argo extensions.

## Installation

```bash
$ yarn add argogogo-run --dev
```

## Usage

This package will add a `argogogo-run` binary to your project. You can execute this binary directly, or through yarn:

```bash
$ yarn run argogogo-run <command>
```

### `argogogo-run serve`

```bash
$ yarn run argogogo-run serve
```

This command will start a local development server for your extension. This development server, based on [`webpack-dev-middleware`](https://github.com/webpack/webpack-dev-middleware), will serve the JavaScript file for your extension, and will recompile it as you make changes to your codebase.

This command will print the `localhost` address of the asset server when it starts up. To control the port the server will bind to, you can pass the `--port` flag:

```bash
$ yarn run argogogo-run serve --port 3000
```

### `argogogo-run build`

```bash
$ yarn run argogogo-run build
```

This command will run your extension through [webpack](https://webpack.js.org) to produce a highly-optimized asset. Once generated, the estimated size of the asset will be printed to the console.

The extension asset will be placed in the `build` directory adjacent to the directory in which you ran the command. By default, its name will be `main.js`, but this can be customized using the `--filename` flag:

```bash
$ yarn run argogogo-run build --filename extension.js
```
