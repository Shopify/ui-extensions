import {
  reactExtension,
  DateField,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return <DateField label="Select a date" />;
}
