import {
  extension,
  ColorPicker,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const blockStack = root.createComponent(
      ColorPicker,
      {
        value: "rgba(255 0 0 / 0.5)"
      },
    );

    root.appendChild(blockStack);
  },
);
