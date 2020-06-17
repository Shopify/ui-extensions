import {ExtensionPoint, render, Card, CardSection, TextField} from '@shopify/argo';

render(ExtensionPoint.Playground, (root, api) => {
  const card = root.createComponent(Card, {
    title: 'My card from a ”vanilla” web worker!',
  });
  const cardSection = root.createComponent(CardSection, {});
  const textField = root.createComponent(TextField, {
    value: '',
    onAfterChange(value: string) {
      textField.updateProps({
        value,
      });
    },
  });

  cardSection.appendChild(textField);
  card.appendChild(cardSection);
  root.appendChild(card);

  root.mount();
});
