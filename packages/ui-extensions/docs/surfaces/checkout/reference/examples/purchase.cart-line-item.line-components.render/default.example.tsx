import {
  reactExtension,
  Text,
  useTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.cart-line-item.line-components.render',
  () => <Extension />,
);

function Extension() {
  const {
    merchandise: {title},
  } = useTarget();
  return <Text>Line item title: {title}</Text>;
}
