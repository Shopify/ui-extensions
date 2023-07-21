import {
  reactExtension,
  Link,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return (
    <Link to="https://www.shopify.ca/climate/sustainability-fund">
      Sustainability fund
    </Link>
  );
}
