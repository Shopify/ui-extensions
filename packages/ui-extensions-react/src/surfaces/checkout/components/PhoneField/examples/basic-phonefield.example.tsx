import {
  reactExtension,
  PhoneField,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
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
