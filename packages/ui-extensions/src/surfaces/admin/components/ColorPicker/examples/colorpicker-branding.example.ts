import {extension, ColorPicker, Text, Divider, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Brand colors for product page',
    );

    const primaryLabel = root.createComponent(Text, {}, 'Primary brand color');
    const primaryPicker = root.createComponent(ColorPicker, {
      value: '#2C6ECB',
      onChange: (color) => console.log('Selected:', color),
    });

    const divider = root.createComponent(Divider);

    const secondaryLabel = root.createComponent(Text, {}, 'Secondary brand color');
    const secondaryPicker = root.createComponent(ColorPicker, {
      value: '#F4F6F8',
      onChange: (color) => console.log('Selected:', color),
    });

    stack.appendChild(heading);
    stack.appendChild(primaryLabel);
    stack.appendChild(primaryPicker);
    stack.appendChild(divider);
    stack.appendChild(secondaryLabel);
    stack.appendChild(secondaryPicker);
    root.appendChild(stack);
  },
);
