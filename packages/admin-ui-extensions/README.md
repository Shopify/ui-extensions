# Admin UI Extensions

Admin UI Extensions is a library that enables developers to write custom JavaScript to be sent to and rendered within the Shopify Admin UI on Web, Android, and iOS. It makes use of Shopify's [remote-ui](https://github.com/Shopify/remote-ui) library, which exposes the methods to create a `RemoteRoot` -- a root node that communicates operations (adding or removing children, changing properties of components, etc.) through a [`MessageChannel`](https://github.com/Shopify/remote-ui/blob/dae08cda64117bd1ab24356bdb94cd9dc36d650c/packages/web-workers/README.md#advanced) to the Shopify app.

## Usage

```js
import {extend, ExtensionPoint, Text} from '@shopify/admin-ui-extensions';

extend('App', (root) => {
  const text = root.createComponent(Text, {
    style: 'strong',
    alignment: 'center',
  });

  text.appendChild('This is the best extension.');
  root.appendChild(text);

  root.mount();
});
```

## CLI

### Creating Extension Points

To create a new extension point, run `yarn new-extension-point`. No need to pass any arguments in - you will be prompted for input.

The script will prompt you to select the page within the Admin surface to expose your new extension points. The options are: "Customer List", "Customer Detail", "Order List", "Order Detail", "Product List", "Product Detail" and "Other". If you select "Other", you will be asked to enter the name (in PascalCase) of the page for which you are creating an extension point.

Next, you will be prompted to enter a name (in PascalCase) for the new extension.

The script will create and update all the files that you need to get started with creating an extension point. Make sure to read the notes that are printed in the log and review all of the new and changed files.
