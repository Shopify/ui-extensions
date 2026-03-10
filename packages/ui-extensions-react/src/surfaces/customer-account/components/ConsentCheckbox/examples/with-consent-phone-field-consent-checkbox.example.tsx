import {
  reactExtension,
  BlockStack,
  ConsentCheckbox,
  ConsentPhoneField,
  InlineStack,
  InlineSpacer,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <BlockStack>
      <ConsentCheckbox policy="sms-marketing">
        Text me with news and offers
      </ConsentCheckbox>
      <InlineStack
        inlineAlignment="start"
        padding={[
          'none',
          'none',
          'none',
          'tight',
        ]}
      >
        <InlineSpacer spacing="extraTight" />
        <ConsentPhoneField
          label="Phone"
          policy="sms-marketing"
        />
      </InlineStack>
    </BlockStack>
  );
}
