import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'This component renders text. Remember, you can also add your own styling.',
  requires: '',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TextProps',
      description: '',
      type: 'TextProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Text/examples/basic-Text.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Text.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
