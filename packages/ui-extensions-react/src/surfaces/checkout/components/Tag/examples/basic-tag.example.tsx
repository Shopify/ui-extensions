import {reactExtension, Tag} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <Tag icon="discount">SPRING</Tag>;
}
