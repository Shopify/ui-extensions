import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Table',
  description:
    'Use tables to organize and display data in a grid format. Tables help merchants view, analyze, and compare data.',
  requires: '',
  thumbnail: 'table-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Table',
      description: 'A component for displaying data in rows and columns.',
      type: 'Table',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'table-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'Peact',
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
  related: [
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/components/structure/grid',
    },
  ],
};

export default data;
