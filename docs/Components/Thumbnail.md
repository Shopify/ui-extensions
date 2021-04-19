# Thumbnail

Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context.

## Examples

#### Vanilla

```js
import {ExtensionPoint, render, Thumbnail} from '@shopify/argo-admin';

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
import {ExtensionPoint, Thumbnail} from '@shopify/argo-admin';
import {render} from '@shopify/argo-admin/react';

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
| scaleType | `ScaleType`                     | Method used to scale the thumbnail. |          |
| source    | `string`                        | URL for the image.                  |          |
| alt       | `string`                        | Alt text for the thumbnail.         |          |

### ScaleType

- `'fill'` May stretch image to fit the content view.
- `'fit'` Preserves aspect ratio, padding remaining space.
- `'crop'` Preserves aspect ratio, fills content view, and crops area outside content view.
