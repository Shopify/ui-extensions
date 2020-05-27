import {ExtensionPoint, render} from '@shopify/argo';
import {Card, CardSection, TextField} from '@shopify/argo/components';

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

  cardSection.appendChild(textField as any);
  card.appendChild(cardSection as any);
  root.appendChild(card);

  root.mount();
});
