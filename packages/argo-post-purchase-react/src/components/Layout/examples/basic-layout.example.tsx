import {render, Layout, View} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

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
