import {
  extension,
  URLField,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const urlField = root.createComponent(URLField, {
      label: 'URL',
      name: 'url',
    });

    root.appendChild(urlField);
  },
);
