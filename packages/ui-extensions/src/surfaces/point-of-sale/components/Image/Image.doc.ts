import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The `Image` component adds visual content to the POS interface and allows you to customize the presentation of visuals. Use images to showcase products, illustrate concepts, provide visual context, or support user tasks and interactions in POS workflows. Images are display-only components. For interactive functionality, wrap them in [`Button`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/button) or [`Clickable`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/clickable) components.' +
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
  subCategory: 'Media and visuals',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose appropriate sizing:** Use \`inlineSize="fill"\` for responsive layouts. Use \`inlineSize="auto"\` to maintain natural dimensions.
- **Select object fit behavior:** Use \`objectFit="contain"\` to show the complete image. Use \`objectFit="cover"\` to fill the container, accepting cropping.
- **Implement error handling and loading states:** Image loading and caching behavior depends on the browser and network conditions—implement proper error handling and loading states for better user experience.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Large images can impact performance—ensure proper optimization and compression for better loading times.
`,
    },
  ],
  related: [],
};

export default data;
