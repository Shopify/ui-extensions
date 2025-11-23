import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The `Image` component adds visual content within the interface and allows you to customize the presentation of visuals. Use images to showcase products, illustrate concepts, provide visual context, or support user tasks and interactions in POS workflows.\n\nImages enhance the user experience by providing immediate visual recognition and reducing cognitive load.\n\n`Image` components handle loading errors gracefully with fallback options and provides placeholder states to maintain layout stability during image loading on slower network connections. The component implements lazy loading for images outside the viewport, improving initial page load performance while ensuring smooth scrolling as merchants navigate through product catalogs or image-heavy interfaces.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Image` component.',
      type: 'ImageProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'image-default.png',
    codeblock: generateCodeBlock('Show an image', 'image', 'default-example'),
    description:
      'Show images within your extension interface with customizable presentation. This example demonstrates rendering images with proper sizing, loading states, and error handling, ideal for showcasing products, illustrating concepts, or providing visual context in POS workflows.',
  },
  thumbnail: 'image-thumbnail.png',
};

export default data;
