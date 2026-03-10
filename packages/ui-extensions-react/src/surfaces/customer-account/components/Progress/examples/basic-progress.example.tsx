import {
  reactExtension,
  Progress,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Progress accessibilityLabel="Loading" />
  );
}
