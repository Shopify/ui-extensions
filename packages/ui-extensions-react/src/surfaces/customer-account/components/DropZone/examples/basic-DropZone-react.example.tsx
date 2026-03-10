import {
  reactExtension,
  DropZone,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return <DropZone accept="image/*" />;
}
