import {
  render,
  ChoiceList,
  Choice,
  BlockStack,
  InlineStack,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <InlineStack>
      <ChoiceList
        name="choice"
        value="first"
        onChange={(value) => {
          console.log(`onChange event with value: ${value}`);
        }}
      >
        <BlockStack>
          <Choice id="first">Ship</Choice>
          <Choice id="second">Pickup</Choice>
        </BlockStack>
      </ChoiceList>

      <ChoiceList
        name="choiceMultiple"
        value={['multipleFirst']}
        onChange={(value) => {
          console.log(`onChange event with value: ${value}`);
        }}
      >
        <BlockStack>
          <Choice id="multipleFirst">Gift message</Choice>
          <Choice id="multipleSecond">Gift wrapping</Choice>
        </BlockStack>
      </ChoiceList>
    </InlineStack>
  );
}
