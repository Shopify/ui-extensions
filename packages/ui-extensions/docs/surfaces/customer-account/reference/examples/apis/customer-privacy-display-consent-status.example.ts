import {extension, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

function consentLabel(value?: boolean) {
  if (value === true) return 'Allowed';
  if (value === false) return 'Not allowed';
  return 'No decision';
}

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const privacy = api.customerPrivacy.current;
    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(root.createComponent(Text, {emphasis: 'bold'}, 'Privacy settings'));
    stack.appendChild(root.createComponent(Text, {}, `Analytics: ${consentLabel(privacy.visitorConsent.analytics)}`));
    stack.appendChild(root.createComponent(Text, {}, `Marketing: ${consentLabel(privacy.visitorConsent.marketing)}`));
    root.appendChild(stack);
  },
);
