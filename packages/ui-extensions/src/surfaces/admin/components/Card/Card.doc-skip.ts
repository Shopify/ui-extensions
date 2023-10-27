import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Card',
  description:
    'Cards are used to group similar concepts and tasks together for users to scan, read, and get things done. It displays content in a familiar and recognizable style.',
  requires: '',
  thumbnail: 'card-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'CardProps',
      description: '',
      type: 'CardProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'card-default.png',
    codeblock: {
      title: 'Use Card to build your layout',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Card/examples/basic-Card.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Card.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
