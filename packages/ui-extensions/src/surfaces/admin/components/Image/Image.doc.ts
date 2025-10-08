import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Image';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/image.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Adding illustrations and photos.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use high-resolution images to ensure a professional and high-quality experience.
- Use optimized images so your app loads as fast as possible.
- Use images intentionally, these should add clarity and lead users to the next step.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Image',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ImageEvents',
    },
  ],
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
