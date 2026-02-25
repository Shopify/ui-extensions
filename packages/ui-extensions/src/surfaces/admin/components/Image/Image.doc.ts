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
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates the simplest implementation of an image component with a source and alt text.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to create a responsive image with a fixed 16:9 aspect ratio, set to cover the container, and loaded lazily.',
            codeblock: {
              title: 'Responsive layout with aspect ratio',
              tabs: [
                {
                  code: './examples/responsive-layout-with-aspect-ratio.html',
                  language: 'html',
                },

                {
                  code: './examples/responsive-layout-with-aspect-ratio.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how to provide multiple image sources for different screen sizes and resolutions using srcSet and sizes attributes.',
            codeblock: {
              title: 'Responsive images with srcset',
              tabs: [
                {
                  code: './examples/responsive-images-with-srcset.html',
                  language: 'html',
                },

                {
                  code: './examples/responsive-images-with-srcset.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how to apply border styling to an image, including width, style, color, and radius, using border-related properties.',
            codeblock: {
              title: 'With border styling',
              tabs: [
                {
                  code: './examples/with-border-styling.html',
                  language: 'html',
                },

                {
                  code: './examples/with-border-styling.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to mark an image as decorative, which will make screen readers ignore the image by setting an empty alt text and presentation role.',
            codeblock: {
              title: 'Decorative image',
              tabs: [
                {
                  code: './examples/decorative-image.html',
                  language: 'html',
                },

                {
                  code: './examples/decorative-image.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              "Demonstrates an image with auto-sizing, which allows the image to adjust its size based on its container's width.",
            codeblock: {
              title: 'Auto-sized image',
              tabs: [
                {
                  code: './examples/auto-sized-image.html',
                  language: 'html',
                },

                {
                  code: './examples/auto-sized-image.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to use images within a grid layout, creating a consistent grid of images with equal size, aspect ratio, and styling.',
            codeblock: {
              title: 'Within layout components',
              tabs: [
                {
                  code: './examples/within-layout-components.html',
                  language: 'html',
                },

                {
                  code: './examples/within-layout-components.jsx',
                  language: 'preview-jsx',
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
