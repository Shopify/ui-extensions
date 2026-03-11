import {
  reactExtension,
  Switch,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Switch accessibilityLabel="my-switch" />
  );
}
