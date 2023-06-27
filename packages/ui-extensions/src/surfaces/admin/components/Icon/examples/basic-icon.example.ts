import {
  extension,
  Icon,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const icon = root.createComponent(Icon, {
      name: 'AppsMajor',
    });

    root.appendChild(icon);
  },
);
