import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'Use this component when you want to provide users the ability to perform specific actions, like saving data.',
  requires: '',
  thumbnail: 'button-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Button',
      description: '',
      type: 'Button',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'button-default.png',
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
      name: 'Pressable',
      url: '/docs/api/admin-extensions/components/actions/pressable',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/admin-extensions/components/actions/link',
    },
  ],
};

export default data;
