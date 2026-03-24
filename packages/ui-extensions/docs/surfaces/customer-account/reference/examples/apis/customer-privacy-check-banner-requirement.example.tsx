import {
  reactExtension,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/customer-account';
import {Banner, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const privacy = useCustomerPrivacy();
  if (!privacy.shouldShowBanner) return null;
  return (
    <Banner status="info" title="Cookie preferences">
      <Text>Please review your cookie preferences to personalize your experience.</Text>
    </Banner>
  );
}
