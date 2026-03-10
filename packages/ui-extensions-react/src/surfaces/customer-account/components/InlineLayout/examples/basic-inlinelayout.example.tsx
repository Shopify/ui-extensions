import {
  reactExtension,
  InlineLayout,
  View,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <InlineLayout columns={['20%', 'fill']}>
      <View border="base" padding="base">
        20%
      </View>
      <View border="base" padding="base">
        fill
      </View>
    </InlineLayout>
  );
}
