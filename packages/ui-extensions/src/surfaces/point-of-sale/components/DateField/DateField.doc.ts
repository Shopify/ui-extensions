import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'Use `s-date-field` to capture date input from users. Provides a consistent interface for date selection with proper validation.',
  thumbnail: 'date-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DateField',
    },
    {
      title: 'Slots',
      description: '',
      type: 'DateFieldSlots',
    },
    {
      title: 'Events',
      description: '',
      type: 'DateFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-field-default.png',
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
