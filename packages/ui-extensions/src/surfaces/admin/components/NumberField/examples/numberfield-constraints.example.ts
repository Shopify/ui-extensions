import {extension, NumberField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Warehouse slot configuration',
    );

    const slotField = root.createComponent(NumberField, {
      label: 'Storage slot number',
      name: 'slotNumber',
      min: 1,
      max: 500,
      step: 1,
      error: undefined,
      onChange: (value) => {
        if (value > 500) {
          slotField.updateProps({
            error: 'Slot number cannot exceed 500',
          });
        } else {
          slotField.updateProps({error: undefined});
        }
      },
    });

    const palletField = root.createComponent(NumberField, {
      label: 'Units per pallet',
      name: 'unitsPerPallet',
      min: 1,
      max: 200,
      step: 1,
    });

    stack.appendChild(heading);
    stack.appendChild(slotField);
    stack.appendChild(palletField);
    root.appendChild(stack);
  },
);
