# Thumbnail

Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context.

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, Thumbnail} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const thumbnail = root.createComponent(Thumbnail, {
    size: 'small',
    scaleType: 'fit',
    source: 'https://somecoolpicture.com',
    alt: 'Probably a picture of someone skateboarding',
  });

  root.appendChild(thumbnail);
  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, Thumbnail} from '@shopify/argo-admin-react';

function App() {
  return (
    <Thumbnail
      size="small"
      scaleType="fit"
      source="https://somecoolpicture.com"
      alt="Probably a picture of someone skateboarding"
    />
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name      | Type                            | Description                         | Required |
| --------- | ------------------------------- | ----------------------------------- | -------- |
| size      | `'small'`,`'medium'`, `'large'` | Size of the thumbnail.              |          |
| source    | `string`                        | URL for the image.                  |          |
| alt       | `string`                        | Alt text for the thumbnail.         |          |
