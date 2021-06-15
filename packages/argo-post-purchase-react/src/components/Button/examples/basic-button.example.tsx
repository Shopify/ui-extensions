import {render, useExtensionApi, Button} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  const {extensionPoint} = useExtensionApi();

  return (
    <Button
      onPress={() => {
        // eslint-disable-next-line no-console
        console.log(`Extension point: ${extensionPoint}`);
      }}
    >
      Log extension point to console
    </Button>
  );
}
