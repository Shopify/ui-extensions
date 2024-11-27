import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Select',
  description: 'Select is used to ...',
  requires: '',
  thumbnail: 'select-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Select',
      description: '',
      type: 'Select',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Select/examples/basic-select.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-select.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
