import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'UnorderedList',
  description:
    'UnorderedList displays a set of related text-only content beginning with a bullet.',
  requires: '',
  thumbnail: 'unordered-list-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'UnorderedList',
      description: 'A list of items that are unordered.',
      type: 'UnorderedListProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'unordered-list-default.png',
    codeblock: {
      title: 'Add a simple unordered list to your app.',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-unordered-list.example.tsx',
          language: 'jsx',
        },
        {
          title: 'Preview',
          code: './examples/preview.html',
          language: 'preview',
        },
      ],
    },
  },
  related: [],
};

export default data;
