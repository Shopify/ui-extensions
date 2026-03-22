import {
  reactExtension,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function consentLabel(value?: boolean) {
  if (value === true) return 'Allowed';
  if (value === false) return 'Not allowed';
  return 'No decision';
}

function Extension() {
  const privacy = useCustomerPrivacy();
  return (
    <BlockStack>
      <Text emphasis="bold">Privacy settings</Text>
      <Text>Analytics: {consentLabel(privacy.visitorConsent.analytics)}</Text>
      <Text>Marketing: {consentLabel(privacy.visitorConsent.marketing)}</Text>
    </BlockStack>
  );
}
