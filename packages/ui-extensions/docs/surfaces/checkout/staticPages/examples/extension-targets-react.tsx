import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return <Banner>Your extension</Banner>;
}
