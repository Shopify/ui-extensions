import {
  reactExtension,
  Banner,
  useAvailablePaymentOptions,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const options = useAvailablePaymentOptions();

  if (
    options.some(
      (option) => option.type === 'wallet',
    )
  ) {
    return (
      <Banner>
        Select an express payment method for
        faster checkout
      </Banner>
    );
  }

  return null;
}
