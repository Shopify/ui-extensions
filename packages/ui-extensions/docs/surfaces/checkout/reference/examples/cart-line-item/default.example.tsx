import {
  reactExtension,
  Text,
  useCartLineTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.cart-line-item.render-after',
  () => <Extension />,
);

function Extension() {
  const {
    merchandise: {title},
  } = useCartLineTarget();
  return <Text>Line item title: {title}</Text>;
}
