import {
  reactExtension,
  Banner,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return <Banner>Your extension</Banner>;
}
