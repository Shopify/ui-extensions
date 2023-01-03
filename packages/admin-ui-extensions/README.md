# Admin UI Extensions

Admin UI Extensions is a library that enables developers to write custom JavaScript to be sent to and rendered within the Shopify Admin UI on Web, Android, and iOS. It makes use of Shopify's [remote-ui](https://github.com/Shopify/remote-ui) library, which exposes the methods to create a `RemoteRoot` -- a root node that communicates operations (adding or removing children, changing properties of components, etc.) through a [`MessageChannel`](https://github.com/Shopify/remote-ui/blob/dae08cda64117bd1ab24356bdb94cd9dc36d650c/packages/web-workers/README.md#advanced) to the Shopify app.

## Usage

There are two ways to use Admin UI Extensions components in your extension - vanilla JS and React.

With the vanilla JS approach, adding a button looks like the following:

```js
import {extend, Button} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const button = root.createComponent(Button, {
    title: 'Press Me',
    primary: true,
    onPress: () => console.log('Pressed'),
    disabled: false,
  });

  root.appendChild(button);
  root.mount();
});
```

You can find more component usage examples alongside each component in [packages/admin-ui-extensions/src/components](/packages/admin-ui-extensions/src/components)

To use the React implementation, check out [packages/admin-ui-extensions-react](/packages/admin-ui-extensions/README.md).
