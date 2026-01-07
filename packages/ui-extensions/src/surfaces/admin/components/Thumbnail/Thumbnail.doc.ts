import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Thumbnail',
  description:
    'Thumbnails are used as a visual anchor and identifier for an object. They should be used along with text to provide context.',
  requires: '',
  thumbnail: 'thumbnail-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ThumbnailProps',
      description: '',
      type: 'ThumbnailProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Media and visuals',
  defaultExample: {
    codeblock: {
      title: 'Basic Thumbnail',
      tabs: [
        {
          code: './examples/basic-thumbnail.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
