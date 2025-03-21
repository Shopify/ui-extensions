import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'OrderedList',
  description:
    'OrderedList displays a set of related text-only content beginning with a number.',
  requires: '',
  thumbnail: 'ordered-list-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'OrderedList',
      description: 'A list of items that are ordered numerically.',
      type: 'OrderedListProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'ordered-list-default.png',
    codeblock: {
      title: 'Add a simple ordered list to your app.',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-ordered-list.example.tsx',
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
