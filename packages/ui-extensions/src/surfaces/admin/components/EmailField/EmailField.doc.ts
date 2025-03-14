import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'Use an email field to allow merchants to input email addresses. This component provides built-in email validation and appropriate keyboard settings.',
  requires: '',
  thumbnail: 'emailfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'EmailField',
      description: 'A specialized text input field for email addresses.',
      type: 'EmailFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'emailfield-default.png',
    codeblock: {
      title: 'Basic EmailField example',
      tabs: [
        {
          title: 'Peact',
          code: './examples/basic-email-field.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-email-field.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'TextArea',
      url: '/docs/api/admin-extensions/components/forms/textarea',
    },
  ],
};

export default data;
