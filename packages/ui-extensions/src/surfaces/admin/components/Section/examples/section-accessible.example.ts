import {extension, Section, TextField, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const shippingSection = root.createComponent(Section, {
      heading: 'Shipping configuration',
      accessibilityLabel: 'Configure shipping dimensions and weight for this product',
    });

    const weight = root.createComponent(TextField, {
      label: 'Weight (kg)',
      name: 'weight',
    });
    const length = root.createComponent(TextField, {
      label: 'Length (cm)',
      name: 'length',
    });
    const width = root.createComponent(TextField, {
      label: 'Width (cm)',
      name: 'width',
    });

    shippingSection.appendChild(weight);
    shippingSection.appendChild(length);
    shippingSection.appendChild(width);

    stack.appendChild(shippingSection);
    root.appendChild(stack);
  },
);
