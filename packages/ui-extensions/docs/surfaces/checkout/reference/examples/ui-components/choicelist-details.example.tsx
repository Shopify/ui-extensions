import {
  reactExtension,
  BlockStack,
  Choice,
  ChoiceList,
  DatePicker,
  TextBlock,
  TextField,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ChoiceList
      variant="group"
      name="white-glove"
      value={['white-glove-1']}
      onChange={(value) => {
        console.log(
          `onChange event with value: ${value}`,
        );
      }}
    >
      <Choice
        id="white-glove-1"
        details={
          <>
            <BlockStack spacing="base">
              <BlockStack spacing="extraTight">
                <TextBlock>
                  Choose a delivery date
                </TextBlock>
                <View
                  background="base"
                  border="base"
                  cornerRadius="base"
                  padding="base"
                >
                  <DatePicker selected="" />
                </View>
              </BlockStack>
              <BlockStack spacing="extraTight">
                <TextField
                  label="Additional instructions"
                  value=""
                />
                <TextBlock
                  appearance="subdued"
                  size="small"
                >
                  The more detailed the delivery
                  instructions are, the best we
                  can make the delivery experience
                  for you.
                </TextBlock>
              </BlockStack>
            </BlockStack>
          </>
        }
      >
        Use white glove delivery service
      </Choice>
    </ChoiceList>
  );
}
