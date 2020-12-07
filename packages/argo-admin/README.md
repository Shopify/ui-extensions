# Argo Admin

Argo Admin is a library that enables developers to write custom JavaScript to be sent to and presented within a Shopify-controlled Host. It makes use of Shopify's [remote-ui](https://github.com/Shopify/remote-ui) library.

remote-ui exposes the methods to create a `RemoteRoot` -- a root node that communicates operations (adding or removing children, changing properties of components, etc.) through a [`MessageChannel`](https://github.com/Shopify/remote-ui/blob/dae08cda64117bd1ab24356bdb94cd9dc36d650c/packages/web-workers/README.md#advanced.) to the Shopify Host.

## Usage

```js
import {extend, ExtensionPoint, Text} from '@shopify/argo-admin';

extend('App', (root) => {
  const text = root.createComponent(TextField, {
    style: 'strong',
    alignment: 'center',
  });

  text.appendChild('This is the best extension.');
  root.appendChild(text);

  root.mount();
});
```

## CLI

### Creating Components

TODO

### Creating Extension Points

To create a new extension point, run `yarn new-extension-point`. No need to pass any arguments in - you will be prompted for input.

The script will prompt you to select the page within the Admin surface to expose your new extension points. The options are: "Customer List", "Customer Detail", "Order List", "Order Detail", "Product List", "Product Detail" and "Other". If you select "Other", you will be asked to enter the name (in PascalCase) of the page for which you are creating an extension point.

Next, you will be prompted to enter a name (in PascalCase) for the new extension.

The script will create and update all the files that you need to get started with creating an extension point. Make sure to read the notes that are printed in the log and review all of the new and changed files.

For more in-depth documentation about this script, check out this [doc]('/docs/Scripts/extension-point-generator.md').
