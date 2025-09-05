import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.',
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Image',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media',
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;
