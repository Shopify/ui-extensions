# ResourceItem

Resource items represent specific objects within a collection, such as products or orders. They provide contextual information on the resource type and link to the object’s detail page.

A ResourceItem should be rendered within a [ResourceList](./ResourceList.md).

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, ResourceList, ResourceItem} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const resourceitem1 = root.createComponent(ResourceItem, {
    id: '1234',
    onClick: () => console.log('Clicked 1'),
  });
  resourceitem1.appendChild('Cool item');
  const resourceitem2 = root.createComponent(ResourceItem, {
    id: '5678',
    onClick: () => console.log('Clicked 2'),
  });
  resourceitem2.appendChild('Cooler item');

  const resourcelist = root.createComponent(ResourceList, {});

  resourcelist.appendChild(resourceitem1);
  resourcelist.appendChild(resourceitem2);

  root.appendChild(resourcelist);
  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, ResourceList, ResourceItem} from '@shopify/argo-admin-react';

function App() {
  return (
    <ResourceList>
      <ResourceItem id="1234" onClick={() => console.log('Clicked 1')}>
        Cool item
      </ResourceItem>
      <ResourceItem id="5678" onClick={() => console.log('Clicked 2')}>
        Cooler item
      </ResourceItem>
    </ResourceList>
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name    | Type               | Description | Required |
| ------- | ------------------ | ----------- | -------- |
| id      | `string`, `number` |             | ☑️       |
| onClick | `() => void`       |             | ☑️       |
