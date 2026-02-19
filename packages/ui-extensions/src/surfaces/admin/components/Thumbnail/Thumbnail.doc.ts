import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Thumbnail';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/thumbnail.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Design for square cropping:** Thumbnails automatically crop images to a 1:1 aspect ratio from the center. If your images aren't square, important content near the edges might be cut off.
- **Maintain visual consistency in groups:** Use the same thumbnail size throughout a single list, table, or grid. Mixing sizes creates visual chaos and makes interfaces harder to scan.
- **Always provide descriptive alternative text:** Write alt text that describes the image content, not generic labels like "thumbnail" or "product image." Good alt text helps all merchants understand what they're looking at.
- **Choose appropriate sizes for your context:** Smaller thumbnails work better in dense layouts like tables, while larger sizes suit product-focused interfaces. Consider the merchant's task and the information density when choosing a size.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Thumbnails always render as 1:1 squares and will crop non-square images to fit. The component uses center cropping, which might cut off important image details.
- Images can be loaded from remote URLs or local file resources. Cross-origin images require proper CORS headers from the image host.
- The component shows a generic placeholder icon when images fail to load or no source is provided. Custom placeholder graphics or branded fallbacks aren't available.
- Thumbnails don't include built-in lazy loading. In long lists with many thumbnails, all images load immediately, which might impact performance.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the thumbnail component.',
      type: 'Thumbnail',
    },
    {
      title: 'Events',
      description:
        'The thumbnail component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ThumbnailEvents',
    },
  ],
  defaultExample: {
    image: 'thumbnail-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
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
              'Demonstrates a basic thumbnail component with a product image, showing the default base size and an alt text for accessibility.',
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
              'Shows the thumbnail component in an empty state, displaying a placeholder icon when no image source is provided.',
            codeblock: {
              title: 'Empty state',
              tabs: [
                {
                  code: './examples/empty-state.html',
                  language: 'html',
                },

                {
                  code: './examples/empty-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates the various size options for the thumbnail component, showcasing small-200, base, and large sizes in a stack layout.',
            codeblock: {
              title: 'Different sizes',
              tabs: [
                {
                  code: './examples/different-sizes.html',
                  language: 'html',
                },

                {
                  code: './examples/different-sizes.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how event handlers like onload or onerror can be attached to the thumbnail component via JavaScript to handle image loading states.',
            codeblock: {
              title: 'With event handling',
              tabs: [
                {
                  code: './examples/with-event-handling.html',
                  language: 'html',
                },

                {
                  code: './examples/with-event-handling.jsx',
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
