import {render, Layout, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Layout spacing="base" sizes={[1, 0.2, 0.8, 1]}>
      <View border="base" padding="base">
        Header
      </View>
      <View border="base" padding="base">
        Sidebar
      </View>
      <View border="base" padding="base">
        Content
      </View>
      <View border="base" padding="base">
        Footer
      </View>
    </Layout>
  );
}
