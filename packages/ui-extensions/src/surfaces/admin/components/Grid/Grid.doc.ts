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
      type: 'Grid',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'grid-default.png',
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
