const shared = {
  name: 'PasswordField',
  description:
    'Use `s-password-field` when you need to collect sensitive information from merchants.',
  requires: '',
  thumbnail: 'password-field-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A specialized text input field for passwords.',
      type: 'PasswordField',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'EmailField',
      url: '/docs/api/admin-extensions/components/forms/emailfield',
    },
  ],
};

export default shared;
