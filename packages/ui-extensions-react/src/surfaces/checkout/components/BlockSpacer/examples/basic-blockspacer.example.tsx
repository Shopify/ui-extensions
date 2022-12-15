import {render, BlockSpacer, View} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
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
