# Customer Account UI Extensions

Customer Account UI Extensions is a library that enables developers to write custom JavaScript to be sent to and rendered within the Shopify Customer Account web application.

## Usage

There are multiple ways to use Customer Account UI Extensions components in your extension.

### Vanilla JS

Adding a button looks like the following:

```js
import {extend, Button} from '@shopify/customer-account-ui-extensions';

extend('CustomerAccount::FullPage::RenderWithin', (root, api) => {
  const button = root.createComponent(Button, {
    title: 'Press Me',
    primary: true,
    onPress: () => console.log('Pressed'),
  });

  root.appendChild(button);
});
```

### React

To use the React implementation, check out [packages/customer-account-ui-extensions-react](../customer-account-ui-extensions/README.md).
