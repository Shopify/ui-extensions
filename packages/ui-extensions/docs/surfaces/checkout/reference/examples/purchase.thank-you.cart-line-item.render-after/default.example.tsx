import {
  reactExtension,
  Text,
  useTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.thank-you.cart-line-item.render-after',
  () => <Extension />,
);

function Extension() {
  const {
    merchandise: {title},
  } = useTarget();
  return <Text>Line item title: {title}</Text>;
}
