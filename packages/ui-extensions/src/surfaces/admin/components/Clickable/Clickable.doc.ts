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
      type: 'Clickable',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'clickable-default.png',
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
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
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
