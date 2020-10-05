# Page

**Note:** This component is note available in Product Subscription extensions. See the [full list of available components](../ExtensionPoints/ProductSubscription/README.md).

Use to build the outer wrapper of a page, including the page title and associated actions.

## Implementation

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Page} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const page = root.createComponent(Page, {});

  page.appendChild('This is the best extension.');
  root.appendChild(page);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Page} from '@shopify/argo-admin-react';

function App() {
  return <Page>This is the best extension.</Page>;
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name             | Type             | Description                                                                              | Required |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------- | -------- |
| title            | `string`         | Page title, in large type                                                                | ☑️       |
| subTitle         | `string`         | Page subtitle, in regular type                                                           |          |
| primaryAction    | `Action`         | Primary page-level action. See [Action](#Action) action                                  |          |
| secondaryActions | `Action[]`       | Collection of secondary page-level actions. See [Action](#Action)actions                 |          |
| thumbnail        | `ThumbnailProps` | Thumbnail that precedes the title. See [Thumbnail Props API](./Thumbnail.md#Props%20API) |          |

### Action

| Name        | Type         | Description                                           | Required |
| ----------- | ------------ | ----------------------------------------------------- | -------- |
| content     | `string`     | Action label text.                                    | ☑️       |
| destructive | `boolean`    | Indicates a dangerous or potentially negative action. |          |
| onAction    | `() => void` | Callback for the action.                              |          |
