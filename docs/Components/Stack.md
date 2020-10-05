# Stack

Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.

Use [StackItem](./StackItem) to group multiple elements inside a Stack together.

## Behavior

- 📱 All children of Stack are placed in a single view object, which makes recycling the views expensive and results in poorer performance when scrolling. Consider keeping your Stacks simple.
- By default, Stacks alignment is `'leading’`.
- Distribution is ignored for vertical stacks

| ✅ Do                                                                             | 🛑 Don't                              |
| --------------------------------------------------------------------------------- | ------------------------------------- |
| 📱 Keep Stacks narrow. There is typically more vertical space than horizontal     | 📱 Use complex and deep Stack layouts |
| 📱 Keep Horizontal Stacks shallow. Complex hierarchies have performance penalties |                                       |

For more guidelines, refer to Polaris' [Stack best practices](https://polaris.shopify.com/components/structure/stack#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Stack, Text} from '@shopify/argo-admin';

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

extend('Playground', (root) => {
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

#### React example

```jsx
import {extend, render, ExtensionPoint, Stack, Text} from '@shopify/argo-admin-react';

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

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name         | Type                                                           | Description                                                                    | Required |
| ------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------- |
| vertical     | `boolean`                                                      | Stack the elements vertically.                                                 |          |
| alignment    | `'leading'`, `'trailing'`, `'fill'`, `'center'`, `'baseline'`  | Adjust vertical alignment of items.                                            |          |
| distribution | `'leading'`, `'trailing'`, `'center'`, `'fill'`                | Adjust horizontal alignment of elements.                                       |          |
| spacing      | `'none'`, `'extraTight'`, `'tight'`, `'loose'`, `'extraLoose'` | Adjust spacing between elements.                                               |          |
| wrap         | `boolean`                                                      | Wrap elements to additional rows as needed on small screens. Defaults to true. |          |
