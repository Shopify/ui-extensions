import {
  reactExtension,
  useShippingAddress,
  useBillingAddress,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const shipping = useShippingAddress();
  const billing = useBillingAddress();

  if (!shipping || !billing) {
    return null;
  }

  const isSameAddress =
    shipping.address1 === billing.address1 &&
    shipping.city === billing.city &&
    shipping.zip === billing.zip &&
    shipping.territoryCode === billing.territoryCode;

  return (
    <Banner
      status={isSameAddress ? 'info' : 'warning'}
    >
      <Text>
        {isSameAddress
          ? 'Shipping and billing addresses match.'
          : 'Shipping and billing addresses are different.'}
      </Text>
    </Banner>
  );
}
