import {
  render,
  CalloutBanner,
  Text,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <CalloutBanner title="Special offer today only">
      <Text>Add the Dinghy Skeleton Cruiser to your order and save 15%</Text>
    </CalloutBanner>
  );
}
