import {
  reactExtension,
  BlockStack,
  ChoiceList,
  Choice,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ChoiceList
      name="time"
      value=""
      onChange={(value) => {
        console.log(
          `onChange event with value: ${value}`,
        );
      }}
    >
      <BlockStack>
        <Choice id="morning">
          9:00 AM - 12:00 PM
        </Choice>
        <Choice id="afternoon">
          12:00 PM - 3:00 PM
        </Choice>
        <Choice id="evening">
          3:00 PM - 5:00 PM
        </Choice>
      </BlockStack>
    </ChoiceList>
  );
}
