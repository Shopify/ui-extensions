# StackItem

By default, each individual element in a [Stack](./Stack.md) is treated as one stack item. Wrap multiple elements in a StackItem element, and the Stack component will treat them as one item.

Use the fill prop on a single stack item component to make it fill the rest of the available horizontal space.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Stack, StackItem, Text} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
  const stack = root.createComponent(Stack);
  const stackItemFill = root.createComponent(StackItem, {fill: true});

  const stackItemText = root.createComponent(Text);
  stackItemText.appendChild('Fill the space');

  const stackItemNoFill = root.createComponent(StackItem);
  const text1 = root.createComponent(Text);
  text1.appendChild('Other text');
  const text2 = root.createComponent(Text);
  text2.appendChild('Even more text');

  stackItemFill.appendChild(stackItemText);
  stack.appendChild(stackItemFill);

  stackItemNoFill.appendChild(text1);
  stackItemNoFill.appendChild(text2);
  stack.appendChild(stackItemNoFill);

  root.appendChild(stack);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Stack, StackItem, Text} from '@shopify/argo-admin-react';

function App() {
  return (
    <Stack>
      <StackItem fill>
        <Text>Fill the space</Text>
      </StackItem>
      <StackItem>
        <Text>Other text</Text>
        <Text>Even more text</Text>
      </StackItem>
    </Stack>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name | Type      | Description                                                    | Required |
| ---- | --------- | -------------------------------------------------------------- | -------- |
| fill | `boolean` | Fill the remaining horizontal space in the stack with the item |          |
