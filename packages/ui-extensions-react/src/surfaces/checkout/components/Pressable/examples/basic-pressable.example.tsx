import {
  reactExtension,
  Icon,
  InlineLayout,
  Pressable,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return (
    <Pressable
      border="base"
      cornerRadius="base"
      padding="base"
    >
      <InlineLayout columns={['fill', 'auto']}>
        <Text>Details</Text>
        <Icon source="chevronDown" size="small" />
      </InlineLayout>
    </Pressable>
  );
}
