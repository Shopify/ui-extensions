import {
  reactExtension,
  Banner,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {banner_title} = useSettings();
  return <Banner title={banner_title} />;
}
