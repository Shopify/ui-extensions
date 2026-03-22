import {
  reactExtension,
  useNote,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Banner,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const note = useNote();

  if (!note) {
    return null;
  }

  return (
    <Banner status="info" title="Order note">
      {note}
    </Banner>
  );
}
