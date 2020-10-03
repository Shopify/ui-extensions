# CardSection

Card components can be separated into sections, each one visually separated by a horizontal line and an optional section title.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, CardSection} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
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
import {extend, render, ExtensionPoint, CardSection} from '@shopify/argo-admin-react';

function App() {
  return (
    <Card>
      <CardSection title="">...</CardSection>
    </Card>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name  | Type     | Description        | Required |
| ----- | -------- | ------------------ | -------- |
| title | `string` | Card Section title |          |
