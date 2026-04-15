import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image group',
  description:
    'Display up to 4 images in a grid or stacked layout. The images are displayed as a grid when used within a [Section](/docs/api/customer-account-ui-extensions/{API_VERSION}/web-components/structure/section) component. For example, images of products in a wishlist or subscription. When there are more than 4 images, the component indicates how many more images are not displayed.',
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
  category: 'Web components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'imagegroup-default.png',
    altText:
      'An example of the ImageGroup component shows a group of four images of plants, arranged in a 2x2 grid.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-ImageGroup.example.html',
          language: 'jsx',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
Use these best practices to deliver a clear and accessible experience in your extensions.

### Write concise alt text for each image

Describe what’s important about each image so all users can understand the content.

### Optimize performance

Compress images and use modern formats; consider lazy loading to reduce initial load times.

### Preserve visual breathing room

Maintain consistent spacing around the group so images don’t feel crowded or overwhelming.
`,
    },
  ],
  related: [],
};

export default data;
