import {extension, AdminBlock, Section, Text, Divider, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const content = root.createComponent(BlockStack, {gap: true});

    const complianceSection = root.createComponent(Section, {heading: 'Compliance'});
    const cert = root.createComponent(Text, {}, 'CE Marking — Approved');
    const region = root.createComponent(Text, {}, 'EU distribution cleared');
    complianceSection.appendChild(cert);
    complianceSection.appendChild(region);

    const divider = root.createComponent(Divider);

    const shippingSection = root.createComponent(Section, {heading: 'Shipping'});
    const weight = root.createComponent(Text, {}, 'Weight: 2.5 kg');
    const dimensions = root.createComponent(Text, {}, 'Dimensions: 30 × 20 × 15 cm');
    shippingSection.appendChild(weight);
    shippingSection.appendChild(dimensions);

    content.appendChild(complianceSection);
    content.appendChild(divider);
    content.appendChild(shippingSection);

    const block = root.createComponent(AdminBlock, {
      title: 'Product specifications',
    });
    block.appendChild(content);
    root.appendChild(block);
  },
);
