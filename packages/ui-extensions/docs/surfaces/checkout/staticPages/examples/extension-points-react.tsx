import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/checkout';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return <Banner>Your extension</Banner>;
}
