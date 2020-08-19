# Page

Use to build the outer wrapper of a page, including the page title and associated actions.

## Implementation

#### Vanilla

```js
import {render, ExtensionPoint, Page} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const page = root.createComponent(Page, {});

  page.appendChild('This is the best extension.');
  root.appendChild(page);

  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, Page} from '@shopify/argo-admin-react';

function App() {
  return <Page>This is the best extension.</Page>;
}

render(ExtensionPoint.MyExtension, () => <App />);
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
