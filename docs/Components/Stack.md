# Stack

Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.

Use [StackItem](./StackItem) to group multiple elements inside a Stack together.

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, Stack, Text} from '@shopify/argo-admin';

function buildInlineText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Inline text');
  return text;
}

function buildStackText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

render(ExtensionPoint.MyExtension, (root) => {
  const vStack = root.createComponent(Stack, {
    vertical: true,
  });

  const hStack = root.createComponent(Stack, {
    distribution: 'center',
    alignment: 'fill',
    spacing: 'loose',
    wrap: false,
  });

  hStack.appendChild(buildInlineText());
  hStack.appendChild(buildInlineText());
  hStack.appendChild(buildInlineText());
  vStack.appendChild(hStack);

  vStack.appendChild(buildStackText());
  vStack.appendChild(buildStackText());
  vStack.appendChild(buildStackText());

  root.appendChild(vStack);

  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, Stack, Text} from '@shopify/argo-admin-react';

function App() {
  return (
    <Stack vertical>
      <Stack distribution="center" alignment="fill" spacing="loose" wrap={false}>
        <Text>Inline item</Text>
        <Text>Inline item</Text>
        <Text>Inline item</Text>
      </Stack>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
    </Stack>
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name         | Type                                                           | Description                                                                    | Required |
| ------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------- |
| vertical     | `boolean`                                                      | Stack the elements vertically.                                                 |          |
| alignment    | `'leading'`, `'trailing'`, `'fill'`, `'center'`, `'baseline'`  | Adjust vertical alignment of items.                                            |          |
| distribution | `'leading'`, `'trailing'`, `'center'`, `'fill'`                | Adjust horizontal alignment of elements.                                       |          |
| spacing      | `'none'`, `'extraTight'`, `'tight'`, `'loose'`, `'extraLoose'` | Adjust spacing between elements.                                               |          |
| wrap         | `boolean`                                                      | Wrap elements to additional rows as needed on small screens. Defaults to true. |          |
