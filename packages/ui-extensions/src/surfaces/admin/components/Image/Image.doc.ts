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
      title: 'Simple Image example',
      tabs: [
        {
          title: 'Preact',
          code: './examples/basic-image.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-image.example.ts',
          language: 'js',
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
