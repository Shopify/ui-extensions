import {
  extension,
  PasswordField,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const passwordField = root.createComponent(PasswordField, {
      label: 'Password',
      name: 'password',
    });

    root.appendChild(passwordField);
  },
);
