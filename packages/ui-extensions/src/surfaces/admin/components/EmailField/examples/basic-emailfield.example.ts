import {
  extension,
  EmailField,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const emailField = root.createComponent(EmailField, {
      label: 'Email',
      name: 'email',
    });

    root.appendChild(emailField);
  },
);
