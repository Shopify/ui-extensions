import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description: 'Use this when you want to display an image.',
  requires: '',
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Image',
      description: '',
      type: 'Image',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'image-default.png',
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
          language: 'html',
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
      name: 'Icon',
      url: '/docs/api/admin-extensions/components/media/icon',
    },
  ],
};

export default data;
