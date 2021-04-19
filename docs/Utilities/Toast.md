# Toast

The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action.

## Examples

#### Vanilla

```js
import {ExtensionPoint, render, Button} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root, api) => {
  const {toast} = api;

  const button = root.createComponent(Button, {
    label: 'Pop toast',
    onClick: () => toast.show('Toast popped!'),
  });

  const errorButton = root.createComponent(Button, {
    label: 'Do something',
    onClick: () => toast.show('That didn’t work.', {error: true}),
  });

  root.appendChild(toast);
  root.mount();
});
```

#### React

```jsx
import {ExtensionPoint, Button} from '@shopify/argo-admin';
import {render, useToast} from '@shopify/argo-admin/react';

function App() {
  const {show: showToast} = useToast();

  return (
    <>
      <Button onClick={() => showToast('Toast popped!')} label="Pop toast" />
      <Button onClick={() => showToast('That didn’t work.', {error: true})} label="Do something" />
    </>
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
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
