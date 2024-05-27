import {
  reactExtension,
  InlineLayout,
  Switch,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const switchLabel = 'Shipping insurance';
  return (
    <InlineLayout
      padding="base"
      borderRadius="base"
      border="base"
      columns={['fill', 'auto']}
    >
      <Text>{switchLabel}</Text>
      <Switch accessibilityLabel={switchLabel} />
    </InlineLayout>
  );
}
