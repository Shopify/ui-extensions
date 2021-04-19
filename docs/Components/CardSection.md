# CardSection

⚠️ **Incomplete** (not required for MVP)

The CardSection component is ...

## Examples

#### Vanilla

```js
import {ExtensionPoint, render, CardSection} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const cardsection = root.createComponent(CardSection, {});

  cardsection.appendChild('This is the best extension.');
  root.appendChild(cardsection);

  root.mount();
});
```

#### React

```jsx
import {ExtensionPoint, CardSection} from '@shopify/argo-admin';
import {render} from '@shopify/argo-admin/react';

function App() {
  return <CardSection>...</CardSection>;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API
