import {
  extension,
  NumberField,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const numberField = root.createComponent(NumberField, {
      label: 'Count',
      name: 'count',
    });

    root.appendChild(numberField);
  },
);
