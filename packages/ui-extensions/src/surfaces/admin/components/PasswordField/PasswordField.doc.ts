import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PasswordField',
  description:
    'Use a password field when you need to collect sensitive information from merchants.',
  requires: '',
  thumbnail: 'password-field-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'PasswordField',
      description: 'A specialized text input field for passwords.',
      type: 'PasswordField',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'password-field-default.png',
    codeblock: {
      title: 'Add a password field to your app.',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-password-field.example.tsx',
          language: 'jsx',
        },
        {
          title: 'Preview',
          code: './examples/preview.html',
          language: 'preview',
        },
      ],
    },
  },
  related: [],
};

export default data;
