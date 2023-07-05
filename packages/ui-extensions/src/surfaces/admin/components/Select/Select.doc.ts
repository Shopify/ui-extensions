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
      title: 'SelectProps',
      description: '',
      type: 'SelectProps',
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
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Select/examples/basic-Select.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Select.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
