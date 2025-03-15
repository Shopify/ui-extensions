import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Clickable',
  description:
    'Use Clickable to make elements interactive. This component provides consistent keyboard navigation and accessibility features for clickable elements.',
  requires: '',
  thumbnail: 'clickable-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Clickable',
      description: 'A component that makes its children interactive.',
      type: 'ClickableProps',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'clickable-default.png',
    codeblock: {
      title: 'Basic Clickable example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-clickable.example.tsx',
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
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/admin-extensions/components/actions/link',
    },
  ],
};

export default data;
