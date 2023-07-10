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
      title: 'ImageProps',
      description: '',
      type: 'ImageProps',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Image/examples/basic-Image.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Image.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
