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
      title: 'Text',
      description: '',
      type: 'Text',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-text.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Text/examples/basic-text.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },

  related: [],
};

export default data;
