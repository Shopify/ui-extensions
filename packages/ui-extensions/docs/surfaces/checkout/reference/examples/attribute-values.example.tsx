import {
  Text,
  reactExtension,
  useAttributeValues,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const [buyerSelectedFreeTShirt, tshirtSize] =
    useAttributeValues([
      'buyerSelectedFreeTShirt',
      'tshirtSize',
    ]);

  if (Boolean(buyerSelectedFreeTShirt) === true) {
    return (
      <Text>
        You selected a free t-shirt, size:{' '}
        {tshirtSize}
      </Text>
    );
  }

  return null;
}
