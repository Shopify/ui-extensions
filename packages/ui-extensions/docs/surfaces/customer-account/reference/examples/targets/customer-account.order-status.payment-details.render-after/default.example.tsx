import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.fulfillment-details.render-after',
  () => <Extension />,
);

function Extension() {
  return <Banner>Contact the merchant to complete your payment.</Banner>;
}
