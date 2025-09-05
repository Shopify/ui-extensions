import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'Use `s-text-field` to capture single-line text input from users. Provides a standard input field with validation and accessibility features.',
  thumbnail: 'text-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextField',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TextFieldSlots',
    },
    {
      title: 'Events',
      description: '',
      type: 'TextFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;
