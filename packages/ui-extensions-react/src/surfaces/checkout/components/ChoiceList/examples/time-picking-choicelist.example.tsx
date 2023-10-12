import React from 'react';
import {
  reactExtension,
  ChoiceList,
  Choice,
  BlockStack,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ChoiceList
      name="choice"
      value="first"
      onChange={(value) => {
        console.log(
          `onChange event with value: ${value}`,
        );
      }}
    >
      <BlockStack>
        <Choice id="first">
          9:00 AM - 12:00 PM
        </Choice>
        <Choice id="second">
          12:00 PM - 3:00 PM
        </Choice>
        <Choice id="third">
          3:00 PM - 5:00 PM
        </Choice>
      </BlockStack>
    </ChoiceList>
  );
}
