import {
  reactExtension,
  DateField,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return <DateField label="Select a date" />;
}
