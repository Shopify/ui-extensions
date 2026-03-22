import {extension, BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const privacy = api.customerPrivacy.current;
    const stack = root.createComponent(BlockStack, {});
    if (privacy.region) {
      let regionText = `Region: ${privacy.region.territoryCode}`;
      if (privacy.region.zoneCode) regionText += `, ${privacy.region.zoneCode}`;
      stack.appendChild(root.createComponent(Text, {}, regionText));
    }
    if (privacy.saleOfDataRegion) {
      stack.appendChild(root.createComponent(Text, {appearance: 'subdued'}, 'Data sale opt-out controls are available in your region.'));
    }
    root.appendChild(stack);
  },
);
