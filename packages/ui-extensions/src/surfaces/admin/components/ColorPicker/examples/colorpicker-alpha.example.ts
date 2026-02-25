import {extension, ColorPicker, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Overlay color with transparency',
    );

    const picker = root.createComponent(ColorPicker, {
      value: 'rgba(0, 0, 0, 0.5)',
      allowAlpha: true,
      onChange: (value) => {
        preview.replaceChildren(`Selected: ${value}`);
      },
    });

    const preview = root.createComponent(Text, {}, 'Selected: rgba(0, 0, 0, 0.5)');

    stack.appendChild(heading);
    stack.appendChild(picker);
    stack.appendChild(preview);
    root.appendChild(stack);
  },
);
