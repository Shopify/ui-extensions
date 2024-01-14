import {
  reactExtension,
  Text,
  useTarget,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.cart-line-item.render-after',
  () => <Extension />,
);

function Extension() {
  const {
    merchandise: {title},
  } = useTarget();
  return <Text>Line item title: {title}</Text>;
}
