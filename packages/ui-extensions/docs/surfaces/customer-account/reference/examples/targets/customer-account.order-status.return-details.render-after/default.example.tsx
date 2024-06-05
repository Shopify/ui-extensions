import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.return-details.render-after',
  () => <Extension />,
);

function Extension() {
  return <Banner>Your return request has been received and is processing</Banner>;
}
