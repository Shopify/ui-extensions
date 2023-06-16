import {
  extension,
  HorizontalStack,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const horizontalStack = root.createComponent(
      HorizontalStack,
      {
        gap: 'base',
      },
      [
        root.createText('Child 1'),
        root.createText('Child 2'),
        root.createText('Child 3'),
        root.createText('Child 4'),
      ],
    );

    root.appendChild(horizontalStack);
  },
);
