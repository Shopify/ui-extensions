import {
  reactExtension,
  ScrollView,
  View,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ScrollView maxBlockSize={300}>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
      <View
        border="base"
        padding="base"
        minBlockSize={50}
      >
        View
      </View>
    </ScrollView>
  );
}
