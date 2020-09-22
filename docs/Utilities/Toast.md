# Toast

The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Button} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {toast} = api;

  const button = root.createComponent(Button, {
    label: 'Pop toast',
    onPress: () => toast.show('Toast popped!'),
  });
  root.appendChild(button);

  const errorButton = root.createComponent(Button, {
    label: 'Do something',
    onPress: () => toast.show('That didn’t work.', {error: true}),
  });
  root.appendChild(errorButton);

  root.mount();
});
```

#### React

```jsx
import {extend, render, useToast, ExtensionPoint, Button} from '@shopify/argo-admin-react';

function App() {
  const {show: showToast} = useToast();

  return (
    <>
      <Button onPress={() => showToast('Toast popped!')} label="Pop toast" />
      <Button onPress={() => showToast('That didn’t work.', {error: true})} label="Do something" />
    </>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Toast API

### show()

Returns void.

| Name    | Type      | Description                      | Required |
| ------- | --------- | -------------------------------- | -------- |
| message | `string`  | Message to display in the toast. | ☑️       |
| options | `Options` |                                  |          |

### Options

| Name  | Type      | Description             | Required |
| ----- | --------- | ----------------------- | -------- |
| error | `boolean` | Display an error toast. |          |
