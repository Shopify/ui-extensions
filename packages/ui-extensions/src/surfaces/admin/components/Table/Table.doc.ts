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
      title: 'Basic Table example',
      tabs: [
        {
          title: 'Peact',
          code: './examples/basic-table.example.tsx',
          language: 'tsx',
        },
        {
          title: 'Preview',
          code: './examples/preview.html',
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
