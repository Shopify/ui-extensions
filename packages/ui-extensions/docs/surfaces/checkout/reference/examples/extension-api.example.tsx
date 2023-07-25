import {
  reactExtension,
  Text,
  useExtensionApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {shop} = useExtensionApi();
  return <Text>Shop name: {shop.name}</Text>;
}
