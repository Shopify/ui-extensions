import {
  reactExtension,
  PhoneField,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <PhoneField
      label="Phone"
      value="1 (555) 555-5555"
    />
  );
}
