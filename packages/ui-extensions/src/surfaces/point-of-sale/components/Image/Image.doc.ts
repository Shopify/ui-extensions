import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The image component displays visual content. Use images to showcase products, illustrate concepts, or provide visual context in POS workflows.' +
    '\n\nImages are display-only components. For interactive functionality, wrap them in [button](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/button) or [clickable](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/clickable) components.',
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the image component.',
      type: 'Image',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'image-default.png',
    description:
      'Display visual content using an image component with automatic loading optimization and error handling. This example shows a basic image with source URL and alt text for accessibility.',
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
Large images can impact performance—ensure proper optimization and compression for better loading times.
`,
    },
  ],
  related: [],
};

export default data;
