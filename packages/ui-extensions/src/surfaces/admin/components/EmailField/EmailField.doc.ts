import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description: 'EmailField is used to ...',
  requires: '',
  thumbnail: 'emailfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'EmailFieldProps',
      description: '',
      type: 'EmailFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'emailfield-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/EmailField/examples/basic-EmailField.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-EmailField.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
