import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Thumbnail',
  description:
    'Thumbnail is used as a visual anchor and identify for an object. They should be used along with text to provide context. This component is a work in progress and is subject to change. Please use this component with caution.',
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
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'thumbnail-default.png',
    codeblock: {
      title: 'Add a thumbnail to your app',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Thumbnail/examples/basic-Thumbnail.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Thumbnail.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
