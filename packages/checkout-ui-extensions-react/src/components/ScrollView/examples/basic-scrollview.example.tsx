import {render, ScrollView, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <ScrollView maxBlockSize={300}>
      <View border="base" padding="base" minBlockSize={50}>
        View
      </View>
      <View border="base" padding="base" minBlockSize={50}>
        View
      </View>
      <View border="base" padding="base" minBlockSize={50}>
        View
      </View>
      <View border="base" padding="base" minBlockSize={50}>
        View
      </View>
      <View border="base" padding="base" minBlockSize={50}>
        View
      </View>
    </ScrollView>
  );
}
