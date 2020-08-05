# CardSection

Card components can be separated into sections, each one visually separated by a horizontal line and an optional section title.

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, CardSection} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const card = root.createComponent(Card, {});
  root.appendChild(card);

  const cardSection = root.createComponent(CardSection, {});
  cardSection.appendChild('This is the best extension.');
  card.appendChild(cardSection);

  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, CardSection} from '@shopify/argo-admin-react';

function App() {
  return (
    <Card>
      <CardSection title="">...</CardSection>
    </Card>
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name  | Type   | Description        | Required |
| ----- | ------ | ------------------ | -------- |
| title | string | Card Section title |          |
