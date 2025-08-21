import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'Use `s-email-field` to capture email addresses from users. Provides built-in email validation and appropriate keyboard layout.',
  thumbnail: 'email-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailField',
    },
    {
      title: 'Slots',
      description: '',
      type: 'EmailFieldSlots',
    },
    {
      title: 'Events',
      description: '',
      type: 'EmailFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'email-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'HTML',
        },
      ],
    },
  },
  related: [],
};

export default data;
