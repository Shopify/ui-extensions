import {
  render,
  ChoiceList,
  Choice,
  BlockStack,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <ChoiceList
      name="Choice"
      value="first"
      // eslint-disable-next-line no-console
      onChange={() => console.log('onChange Triggered')}
    >
      <BlockStack>
        <Choice id="first">First choice</Choice>
        <Choice id="second">Second choice</Choice>
      </BlockStack>
    </ChoiceList>
  );
}
