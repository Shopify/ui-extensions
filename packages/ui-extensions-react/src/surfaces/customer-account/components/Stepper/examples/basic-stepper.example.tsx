import {
  reactExtension,
  Stepper,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return <Stepper label="Quantity" value={1} />;
}
