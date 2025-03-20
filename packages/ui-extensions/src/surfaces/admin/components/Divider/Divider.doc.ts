import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Divider',
  description:
    'Use this to create a clear visual separation between different elements in your user interface.',
  requires: '',
  thumbnail: 'divider-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Divider',
      description: '',
      type: 'Divider',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'divider-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-divider.example.tsx',
          language: 'tsx',
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
