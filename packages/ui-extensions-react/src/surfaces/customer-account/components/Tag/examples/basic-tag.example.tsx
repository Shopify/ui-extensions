import {
  reactExtension,
  Tag,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return <Tag icon="discount">SPRING</Tag>;
}
