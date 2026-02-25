import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The Image component adds visual content within the interface and allows you to customize the presentation of visuals. Use images to showcase products, illustrate concepts, provide visual context, or support user tasks and interactions in POS workflows.\n\nImages enhance the user experience by providing immediate visual recognition and reducing cognitive load.\n\nImage components handle loading errors gracefully with fallback options and provides placeholder states to maintain layout stability during image loading on slower network connections. The component implements lazy loading for images outside the viewport, improving initial page load performance while ensuring smooth scrolling as merchants navigate through product catalogs or image-heavy interfaces.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Image component.',
      type: 'ImageProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Media and visuals',
  related: [],
  defaultExample: {
    image: 'image-default.png',
    codeblock: generateCodeBlock('Show an image', 'image', 'default-example'),
    description:
      'Show images within your extension interface with customizable presentation. This example demonstrates rendering images with proper sizing, loading states, and error handling, ideal for showcasing products, illustrating concepts, or providing visual context in POS workflows.',
  },
  thumbnail: 'image-thumbnail.png',

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Select the right fill behavior:** Use \`'contain'\` when showing the complete image is important, \`'cover'\` when filling the container is more important than showing the entire image, and \`'stretch'\` only when exact container filling is required regardless of distortion.\n- **Optimize image sources:** Ensure image URLs are properly formatted, properly formatted, and optimized for web delivery. Consider image compression, appropriate file formats, and loading performance when selecting image sources.\n- **Plan for loading states:** The component automatically shows placeholders during loading or when no \`src\` is provided. Design your layouts to accommodate these loading states and ensure they don't negatively impact the user experience.\n- **Consider responsive design:** Choose size values that work well across different screen sizes and device orientations. Test your image layouts on various POS devices.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Images are display-only components and don't support click events or interactive behaviors.\n- Image loading and caching behavior depends on the browser and network conditions—implement proper error handling for better user experience.\n- Large images can impact performance—ensure proper optimization and consider the device capabilities of your target POS hardware.\n`,
    },
  ],
};

export default data;
