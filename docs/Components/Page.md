# Page

⚠️ **Incomplete** (not required for MVP)

The Page component is ...

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
  return <Page>...</Page>;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API
