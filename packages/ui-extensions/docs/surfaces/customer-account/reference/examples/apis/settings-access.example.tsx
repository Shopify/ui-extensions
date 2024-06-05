import {
  reactExtension,
  Banner,
  useSettings,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const {banner_title} = useSettings();
  return <Banner title={banner_title} />;
}
