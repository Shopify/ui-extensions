import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.fulfillment-details.render-after',
  () => <Extension />,
);

function Extension() {
  return <Banner>Note that tracking info update is subject to the courier who delivers your order</Banner>;
}
