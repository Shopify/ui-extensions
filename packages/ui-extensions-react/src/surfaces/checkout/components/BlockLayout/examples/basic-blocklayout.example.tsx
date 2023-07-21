import {
  reactExtension,
  BlockLayout,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return (
    <BlockLayout rows={[60, 'fill']}>
      <View border="base" padding="base">
        60
      </View>
      <View border="base" padding="base">
        fill
      </View>
    </BlockLayout>
  );
}
