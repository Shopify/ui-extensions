import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'Use `s-text` to display text content with consistent typography and styling. Provides semantic text rendering with proper hierarchy.',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Text',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'text-default.png',
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
