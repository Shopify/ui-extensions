import {extend, TextField, PasswordField} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const usernameField = root.createComponent(TextField, {
    label: 'Username',
  });
  const passwordField = root.createComponent(PasswordField, {
    label: 'Password',
  });

  root.appendChild(usernameField);
  root.appendChild(passwordField);
});
