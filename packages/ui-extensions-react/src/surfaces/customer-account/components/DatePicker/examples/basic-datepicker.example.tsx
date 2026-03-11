import {
  reactExtension,
  DatePicker,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return <DatePicker selected="2021-06-01" />;
}
