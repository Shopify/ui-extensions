import {extension, Divider, TextField, Heading, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const shippingTitle = root.createComponent(Heading, {}, 'Shipping details');
    const weightField = root.createComponent(TextField, {
      label: 'Weight (kg)',
      name: 'weight',
    });
    const dimensionsField = root.createComponent(TextField, {
      label: 'Dimensions (L×W×H cm)',
      name: 'dimensions',
    });

    const divider = root.createComponent(Divider);

    const customsTitle = root.createComponent(Heading, {}, 'Customs information');
    const hsCodeField = root.createComponent(TextField, {
      label: 'HS tariff code',
      name: 'hsCode',
    });
    const originField = root.createComponent(TextField, {
      label: 'Country of origin',
      name: 'countryOfOrigin',
    });

    stack.appendChild(shippingTitle);
    stack.appendChild(weightField);
    stack.appendChild(dimensionsField);
    stack.appendChild(divider);
    stack.appendChild(customsTitle);
    stack.appendChild(hsCodeField);
    stack.appendChild(originField);
    root.appendChild(stack);
  },
);
