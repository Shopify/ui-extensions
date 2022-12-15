import {render, BlockLayout, View} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
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
