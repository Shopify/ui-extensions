import {extend, Card, CardSection, TextField} from '@shopify/argo-admin';

extend('Playground', (root, api) => {
  const card = root.createComponent(Card, {
    title: 'My card from a ”vanilla” web worker!',
    primaryFooterAction: {
      content: 'Show toast',
      onAction: () => api.toast.show('Hello'),
    },
  });
  const cardSection = root.createComponent(CardSection, {});
  const textField = root.createComponent(TextField, {
    label: 'text field',
    value: '',
    onChange(value: string) {
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
