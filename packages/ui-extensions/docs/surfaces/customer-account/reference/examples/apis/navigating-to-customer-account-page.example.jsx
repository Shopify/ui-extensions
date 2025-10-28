import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-button
      onClick={() => {
        navigation.navigate(
          'shopify:customer-account/orders',
        );
      }}
    >
      Navigate to orders path
    </s-button>
  );
}
