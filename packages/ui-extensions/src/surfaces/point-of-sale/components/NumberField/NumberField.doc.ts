import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'Use `s-number-field` to capture numeric input from users. Provides built-in number validation and appropriate keyboard layout for numeric entry.',
  thumbnail: 'number-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberField',
    },
    {
      title: 'Slots',
      description: '',
      type: 'NumberFieldSlots',
    },
    {
      title: 'Events',
      description: '',
      type: 'NumberFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'number-field-default.png',
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
