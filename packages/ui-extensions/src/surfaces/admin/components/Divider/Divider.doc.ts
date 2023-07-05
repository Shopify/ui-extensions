import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Divider',
  description: 'Divider is used to ...',
  requires: '',
  thumbnail: 'divider-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DividerProps',
      description: '',
      type: 'DividerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'divider-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Divider/examples/basic-Divider.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Divider.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
