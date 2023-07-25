import {
  reactExtension,
  Text,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {shop} = useApi();
  return <Text>Shop name: {shop.name}</Text>;
}
