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
      type: 'UnorderedList',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'unordered-list-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.html',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  related: [],
};

export default data;
