import {extension, BlockStack, Text, Heading, Divider} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const outer = root.createComponent(BlockStack, {
      gap: true,
      padding: 'base',
    });

    const heading = root.createComponent(Heading, {}, 'Product compliance');

    const section1 = root.createComponent(BlockStack, {
      gap: true,
      paddingBlock: 'base',
    });
    const label1 = root.createComponent(Text, {fontWeight: 'bold'}, 'Safety rating');
    const value1 = root.createComponent(Text, {}, 'UL Listed — Class II');
    section1.appendChild(label1);
    section1.appendChild(value1);

    const divider = root.createComponent(Divider);

    const section2 = root.createComponent(BlockStack, {
      gap: true,
      paddingBlock: 'base',
    });
    const label2 = root.createComponent(Text, {fontWeight: 'bold'}, 'Certifications');
    const value2 = root.createComponent(Text, {}, 'CE, FCC, RoHS compliant');
    section2.appendChild(label2);
    section2.appendChild(value2);

    outer.appendChild(heading);
    outer.appendChild(section1);
    outer.appendChild(divider);
    outer.appendChild(section2);
    root.appendChild(outer);
  },
);
