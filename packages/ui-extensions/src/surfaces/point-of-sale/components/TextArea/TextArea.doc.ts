import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'Use `s-text-area` to capture multi-line text input from users. Provides a resizable text input area for longer content like descriptions or comments.',
  thumbnail: 'text-area-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextArea',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TextAreaSlots',
    },
    {
      title: 'Events',
      description: '',
      type: 'TextAreaEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-area-default.png',
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
