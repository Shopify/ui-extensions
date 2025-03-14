import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Grid',
  description:
    'Use Grid to create responsive layouts with consistent spacing. Grid helps organize content into columns and rows with proper alignment and spacing.',
  requires: '',
  thumbnail: 'grid-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Grid',
      description: 'A component for creating grid-based layouts.',
      type: 'GridProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'grid-default.png',
    codeblock: {
      title: 'Basic Grid example',
      tabs: [
        {
          title: 'Peact',
          code: './examples/basic-grid.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-grid.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'Box',
      url: '/docs/api/admin-extensions/components/structure/box',
    },
    {
      type: 'component',
      name: 'Stack',
      url: '/docs/api/admin-extensions/components/structure/stack',
    },
  ],
};

export default data;
