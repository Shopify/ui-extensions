import {
  reactExtension,
  useCurrency,
} from '@shopify/ui-extensions-react/customer-account';
import {Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const currency = useCurrency();

  return (
    <Text>Order currency: {currency.isoCode}</Text>
  );
}
