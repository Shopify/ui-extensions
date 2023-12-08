import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.unfulfilled-items.render-after',
  () => <Extension />,
);

function Extension() {
  return <Banner>Fulfillment details not yet available.</Banner>;
}
