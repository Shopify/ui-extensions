import {
  extension,
  Divider,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const divider = root.createComponent(Divider);

    root.appendChild(divider);
  },
);
