import {extension, Section, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const outer = root.createComponent(Section, {
      heading: 'Product compliance',
    });

    const intro = root.createComponent(
      Text,
      {},
      'Regulatory status for product distribution.',
    );

    const inner = root.createComponent(Section, {
      heading: 'Safety certifications',
    });

    const cert1 = root.createComponent(Text, {}, 'UL Listed — Class II');
    const cert2 = root.createComponent(Text, {}, 'CE Marking — Approved');
    const cert3 = root.createComponent(Text, {}, 'FCC Part 15 — Compliant');

    inner.appendChild(cert1);
    inner.appendChild(cert2);
    inner.appendChild(cert3);

    outer.appendChild(intro);
    outer.appendChild(inner);

    stack.appendChild(outer);
    root.appendChild(stack);
  },
);
