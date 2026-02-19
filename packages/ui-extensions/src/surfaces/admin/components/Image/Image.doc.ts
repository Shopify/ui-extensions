import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Image';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/image.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Always provide descriptive alternative text:** Write alt text that describes what's in the image, not what the image is for. Use "Blue cotton t-shirt with crew neck" instead of "Product image." For decorative images that don't add information, use an empty alt attribute.
- **Use images for meaningful content, not decoration:** Display product photos, diagrams, charts, or instructional screenshots. For icons or decorative elements, use the [icon](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/media-and-visuals/icon) component instead.
- **Ensure images are accessible and performant:** Use appropriate image formats (WebP for photos, PNG for graphics with transparency, SVG for logos). Ensure images load from reliable sources with proper CORS configuration if cross-origin.
- **Consider the image's purpose and context:** Use images to help merchants understand products, visualize data, or follow instructions. Every image should serve a clear purpose in your interface.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Images can be loaded from remote URLs or local file resources. Cross-origin images require proper CORS headers from the image host.
- The component displays images at their intrinsic aspect ratio. Use \`aspectRatio\` (for example, \`'16/9'\`) to set a fixed ratio, and \`objectFit\` (\`'cover'\` or \`'contain'\`) to control how the image resizes within its container.
- The component provides a basic placeholder while images load but doesn't include built-in loading skeletons or progressive loading features.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the image component.',
      type: 'Image',
    },
    {
      title: 'Events',
      description:
        'The image component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ImageEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'image-default.png',
    description:
      'Add visual content to enhance your interface. This example shows a basic image with source URL and alt text for accessibility.',
    codeblock: {
      title: 'Display an image',
      tabs: [
        {
          title: '',
          code: './examples/basic-usage.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Control image proportions with a fixed aspect ratio. This example shows a 16:9 image with cover fit and lazy loading for performance.',
            codeblock: {
              title: 'Set an aspect ratio',
              tabs: [
                {
                  title: '',
                  code: './examples/responsive-layout-with-aspect-ratio.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Serve optimized images for different screen sizes. This example shows how to use the `srcSet` property with `sizes` attributes for responsive image delivery.',
            codeblock: {
              title: 'Use responsive images',
              tabs: [
                {
                  title: '',
                  code: './examples/responsive-images-with-srcset.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Add visual emphasis with border styling. This example shows an image with border width, color, and rounded corners.',
            codeblock: {
              title: 'Add border styling',
              tabs: [
                {
                  title: '',
                  code: './examples/with-border-styling.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Hide images from screen readers when purely decorative. This example shows an image with empty `alt` text and `presentation` role for accessibility.',
            codeblock: {
              title: 'Mark as decorative',
              tabs: [
                {
                  title: '',
                  code: './examples/decorative-image.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Let images size naturally based on their container. This example shows an image with `auto` inline size that adapts to available width.',
            codeblock: {
              title: 'Enable auto-sizing',
              tabs: [
                {
                  title: '',
                  code: './examples/auto-sized-image.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Combine `aspectRatio` and `inlineSize` for precise control. This example shows an image with custom proportions that fills available width.',
            codeblock: {
              title: 'Combine aspect ratio and sizing',
              tabs: [
                {
                  title: '',
                  code: './examples/default.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Create consistent image galleries with grid layouts. This example shows three images in a grid with matching size, aspect ratio, and border radius.',
            codeblock: {
              title: 'Use in a grid layout',
              tabs: [
                {
                  title: '',
                  code: './examples/within-layout-components.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
