import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The `Image` component adds visual content to the POS interface and allows you to customize the presentation of visuals. Use images to showcase products, illustrate concepts, provide visual context, or support user tasks and interactions in POS workflows.' +
    '\n\nImages enhance the user experience by providing immediate visual recognition and reducing cognitive load.' +
    '\n\n`Image` components handle loading errors gracefully with fallback options and provides placeholder states to maintain layout stability during image loading on slower network connections. The component implements lazy loading for images outside the viewport, improving initial page load performance while ensuring smooth scrolling as merchants navigate through product catalogs or image-heavy interfaces.',
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Image` component.',
      type: 'Image',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media',
  defaultExample: {
    image: 'image-default.png',
    description:
      'Display visual content using an `Image` component with automatic loading optimization and error handling. This example shows a basic image with source URL and alt text for accessibility.',
    codeblock: {
      title: 'Display an image',
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
