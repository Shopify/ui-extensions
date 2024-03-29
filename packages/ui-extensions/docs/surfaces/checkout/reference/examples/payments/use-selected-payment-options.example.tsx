import {
  reactExtension,
  Banner,
  useSelectedPaymentOptions,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const options = useSelectedPaymentOptions();

  if (
    options.some(
      (option) => option.type === 'creditCard',
    )
  ) {
    return (
      <Banner>
        All credit card transactions are secure
      </Banner>
    );
  }

  return null;
}
