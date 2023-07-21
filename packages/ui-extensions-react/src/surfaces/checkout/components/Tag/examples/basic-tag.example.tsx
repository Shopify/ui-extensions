import {
  reactExtension,
  Tag,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return <Tag icon="discount">SPRING</Tag>;
}
