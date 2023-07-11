import {reactExtension, DateField} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <DateField label="Select a date" />;
}
