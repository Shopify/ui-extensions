import {extension, HeadingGroup, Heading, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const title = root.createComponent(Heading, {}, 'Product compliance');

    const outerGroup = root.createComponent(HeadingGroup);
    const sectionTitle = root.createComponent(Heading, {}, 'Safety certifications');
    const sectionText = root.createComponent(
      Text,
      {},
      'Certifications required for sale in regulated markets.',
    );

    const innerGroup = root.createComponent(HeadingGroup);
    const subTitle = root.createComponent(Heading, {}, 'EU compliance');
    const subText = root.createComponent(
      Text,
      {},
      'CE marking and REACH regulation status for European Union distribution.',
    );

    innerGroup.appendChild(subTitle);
    innerGroup.appendChild(subText);

    outerGroup.appendChild(sectionTitle);
    outerGroup.appendChild(sectionText);
    outerGroup.appendChild(innerGroup);

    stack.appendChild(title);
    stack.appendChild(outerGroup);
    root.appendChild(stack);
  },
);
