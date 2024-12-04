import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Option',
  description:
    'Use this when you want to give users a predefined list of options to choose from.',
  requires: '',
  thumbnail: 'select-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Option',
      description: '',
      type: 'Option',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'Simple Option example',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-option.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Option/examples/basic-option.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },

  related: [],
};

export default data;
