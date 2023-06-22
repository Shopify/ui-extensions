import {
  reactExtension,
  DatePicker,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <DatePicker selected="2021-06-01" />;
}
