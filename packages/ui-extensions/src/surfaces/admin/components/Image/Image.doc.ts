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
      sectionContent: `- Use high-resolution, optimized images.
- Use intentionally to add clarity and guide users.`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `Alt text should be accurate, concise, and descriptive:
- Indicate it's an image: "Image of", "Photo of".
- Focus on description: "Image of a woman with curly brown hair smiling".`,
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
        'The image component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ImageEvents',
    },
  ],
  defaultExample: {
    image: 'image-default.png',
    description:
      'Display a product thumbnail with metadata in a grid layout. This example demonstrates how to control image sizing with `aspectRatio`, `objectFit`, and `inlineSize`, and round corners with `borderRadius`.',
    codeblock: {
      title: 'Display a product thumbnail',
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
              'Control image proportions with a fixed aspect ratio. This example displays a 16:9 image that scales to fill its container using `objectFit="cover"`, with lazy loading for performance.',
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
              'Set up responsive image sources using `srcSet` and `sizes`. This example demonstrates how to configure the browser to select appropriate image sources based on viewport width.',
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
              'Add visual emphasis with border styling. This example displays an image with border width, color, and rounded corners.',
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
              'Hide images from screen readers when purely decorative. This example presents an image with empty `alt` text and `presentation` role for accessibility.',
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
              'Build a product image gallery with consistent sizing using [grid](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/grid). This example arranges three product photos in a row, each constrained to a square with rounded corners so they line up evenly.',
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
