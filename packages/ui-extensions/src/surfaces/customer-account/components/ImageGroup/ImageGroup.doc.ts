import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ImageGroup',
  description:
    'Display up to 4 images in a grid or stacked layout. For example, images of products in a wishlist or subscription. When there are more than 4 images, the component indicates how many more images are not displayed.',
  thumbnail: 'imagegroup-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ImageGroupPropsDocs',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media',
  defaultExample: {
    image: 'imagegroup-preview.png',
    altText:
      'An example of the ImageGroup component shows a group of four images of plants, arranged in a 2x2 grid.',
    codeblock: {
      title: 'Basic ImageGroup',
      tabs: [
        {
          title: 'Preact',
          code: './examples/basic-ImageGroup-preact.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Optimize image file sizes and consider lazy loading for performance.
`,
    },
  ],
  related: [],
};

export default data;
