import {
  reactExtension,
  PaymentIcon,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return <PaymentIcon name="shop-pay" />;
}
