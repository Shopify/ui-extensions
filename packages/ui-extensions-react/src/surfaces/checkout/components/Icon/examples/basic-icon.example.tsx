import {reactExtension, Icon} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <Icon source="discount" />;
}
