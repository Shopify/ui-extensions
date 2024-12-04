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
          title: 'JS',
          code: './examples/basic-divider.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Divider/examples/basic-divider.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },

  related: [],
};

export default data;
