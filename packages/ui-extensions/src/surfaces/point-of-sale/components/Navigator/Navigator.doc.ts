import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigator',
  description:
    'Use `s-navigator` to manage navigation between screens and handle routing within your application. Provides structured navigation flow control.',
  thumbnail: 'navigator-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Navigator',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'navigator-default.png',
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
