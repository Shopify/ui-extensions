import {render, CalloutBanner, Text} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <CalloutBanner title="Special offer today only">
      <Text>Add the Dinghy Skeleton Cruiser to your order and save 15%</Text>
    </CalloutBanner>
  );
}
