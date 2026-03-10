import {
  reactExtension,
  ConsentPhoneField,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ConsentPhoneField
      label="Phone"
      policy="sms-marketing"
    />
  );
}
