# ResourceItem

Resource items represent specific objects within a collection, such as products or orders. They provide contextual information on the resource type and link to the object’s detail page.

A ResourceItem should be rendered within a [ResourceList](./ResourceList.md).

## Behavior

- 📱 All children of ResourceItems are placed in a single view object, which makes recycling the views expensive. Consider making your ResourceItems simple.
- 📱 Any child of ResourceItem that has an `onPress` will take precedence and the `onPress` of ResourceItem will not be invoked

| ✅ Do                                                                        | 🛑 Don't                              |
| ---------------------------------------------------------------------------- | ------------------------------------- |
| 📱 Keep ResourceItem shallow. Complex hierarchies have performance penalties | 📱 Use complex and deep Stack layouts |

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, ResourceList, ResourceItem} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const resourceItem1 = root.createComponent(ResourceItem, {
    id: '1234',
    onPress: () => console.log('Pressed 1'),
  });
  resourceItem1.appendChild('Cool item');
  const resourceItem2 = root.createComponent(ResourceItem, {
    id: '5678',
    onPress: () => console.log('Pressed 2'),
  });
  resourceItem2.appendChild('Cooler item');

  const resourceList = root.createComponent(ResourceList, {});

  resourceList.appendChild(resourceItem1);
  resourceList.appendChild(resourceItem2);

  root.appendChild(resourceList);
  root.mount();
});
```

#### React example

```jsx
import {
  extend,
  render,
  ExtensionPoint,
  ResourceList,
  ResourceItem,
} from '@shopify/argo-admin-react';

function App() {
  return (
    <ResourceList>
      <ResourceItem id="1234" onPress={() => console.log('Pressed 1')}>
        Cool item
      </ResourceItem>
      <ResourceItem id="5678" onPress={() => console.log('Pressed 2')}>
        Cooler item
      </ResourceItem>
    </ResourceList>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name    | Type               | Description | Required |
| ------- | ------------------ | ----------- | -------- |
| id      | `string`, `number` |             | ☑️       |
| onPress | `() => void`       |             | ☑️       |
