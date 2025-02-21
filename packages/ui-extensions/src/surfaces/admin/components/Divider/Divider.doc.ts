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
          title: 'Preact',
          code: './examples/basic-divider.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-divider.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
