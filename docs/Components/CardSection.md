# CardSection

CardSections are used to group similar concepts within a Card. CardSections add dividers, which visually separate regions within cards.

| ✅ Do                                           | 🛑 Don't                        |
| ----------------------------------------------- | ------------------------------- |
| Use CardSection to split up content within Card | Use CardSection outside of Card |

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, CardSection} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const card = root.createComponent(Card, {});
  root.appendChild(card);

  const cardSection = root.createComponent(CardSection, {});
  cardSection.appendChild('This is the best extension.');
  card.appendChild(cardSection);

  root.mount();
});
```

#### React example

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
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name  | Type     | Description        | Required |
| ----- | -------- | ------------------ | -------- |
| title | `string` | Card Section title |          |
