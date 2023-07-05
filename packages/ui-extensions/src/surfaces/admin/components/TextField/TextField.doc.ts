import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description: 'TextField is used to ...',
  requires: '',
  thumbnail: 'textfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TextFieldProps',
      description: '',
      type: 'TextFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'textfield-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/TextField/examples/basic-TextField.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-TextField.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
