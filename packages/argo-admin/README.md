# Argo Admin

Argo Admin is a library that enables 1P and 3P developers to write custom JavaScript to be sent to and presented within a Shopify-controlled host (Admin, mobile, etc.). It makes use of Shopify's [remote-ui](https://github.com/Shopify/remote-ui) library, which exposes the methods to create a “remote root” -- a root node that communicates operations (adding or removing children, changing properties of components, etc.) through a [`MessageChannel`](https://github.com/Shopify/remote-ui/blob/dae08cda64117bd1ab24356bdb94cd9dc36d650c/packages/web-workers/README.md#advanced.).

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
