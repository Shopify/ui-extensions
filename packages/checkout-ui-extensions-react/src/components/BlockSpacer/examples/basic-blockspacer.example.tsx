import {render, BlockSpacer, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

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
