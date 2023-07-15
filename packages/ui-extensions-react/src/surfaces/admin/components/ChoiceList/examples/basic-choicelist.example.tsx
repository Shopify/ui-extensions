import {
  reactExtension,
  ChoiceList,
  Choice,
  BlockStack,
  InlineStack,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <Extension />);

function Extension() {
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
          <Choice id="first">Accept Review</Choice>
          <Choice id="second">Reject Review</Choice>
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
          <Choice id="multipleFirst">Thanks customer</Choice>
          <Choice id="multipleSecond">Provide Reason for Accepting/Rejecting</Choice>
        </BlockStack>
      </ChoiceList>
    </InlineStack>
  );
}
