# Thumbnail

Thumbnails are used as a visual anchor and identifier for an object. They should be used along with text to provide context.

| ✅ Do                                  | 🛑 Don't                                  |
| -------------------------------------- | ----------------------------------------- |
| Use Thumbnails with supporting context | Use Thumbnails without supporting context |

Also refer to Polaris' [Thumbnail best practices](https://polaris.shopify.com/components/images-and-icons/thumbnail#section-best-practices).

## Examples

#### Vanilla javascript example

```js
import {extend, ExtensionPoint, Thumbnail} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const thumbnail = root.createComponent(Thumbnail, {
    size: 'small',
    scaleType: 'fit',
    source: 'https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png',
    alt: 'Shopify',
  });

  root.appendChild(thumbnail);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Thumbnail} from '@shopify/argo-admin-react';

function App() {
  return (
    <Thumbnail
      size="small"
      scaleType="fit"
      source="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png"
      alt="Shopify"
    />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name   | Type                            | Description                 | Required |
| ------ | ------------------------------- | --------------------------- | -------- |
| size   | `'small'`,`'medium'`, `'large'` | Size of the thumbnail.      |          |
| source | `string`                        | URL for the image.          |          |
| alt    | `string`                        | Alt text for the thumbnail. |          |
