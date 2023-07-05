import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'URLField',
  description: 'URLField is used to ...',
  requires: '',
  thumbnail: 'urlfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'URLFieldProps',
      description: '',
      type: 'URLFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'urlfield-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/URLField/examples/basic-URLField.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-URLField.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
