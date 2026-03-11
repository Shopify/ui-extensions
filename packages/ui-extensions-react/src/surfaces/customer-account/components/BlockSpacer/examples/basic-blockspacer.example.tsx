import {
  reactExtension,
  BlockSpacer,
  View,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <>
      <View border="base" padding="base">
        View
      </View>
      <BlockSpacer spacing="loose" />
      <View border="base" padding="base">
        View
      </View>
    </>
  );
}
