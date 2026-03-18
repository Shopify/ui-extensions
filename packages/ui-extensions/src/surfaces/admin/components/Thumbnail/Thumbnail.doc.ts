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
      description: 'Configure the properties for the thumbnail component.',
      type: 'Thumbnail',
    },
    {
      title: 'Events',
      description:
        'The thumbnail component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-web-components#handling-events).',
      type: 'ThumbnailEvents',
    },
  ],
  defaultExample: {
    image: 'thumbnail-default.png',
    description:
      'Display small preview images for products or items. This example presents a basic thumbnail with source URL and alt text for accessibility.',
    codeblock: {
      title: 'Display a thumbnail',
      tabs: [
        {
          title: '',
          code: './examples/default.html',
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
              'Show a placeholder when no image is available. This example displays a thumbnail without a source that renders a default icon.',
            codeblock: {
              title: 'Show an empty state',
              tabs: [
                {
                  title: '',
                  code: './examples/empty-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Adapt thumbnail prominence to different contexts. This example displays `small-200`, `base`, and `large` sizes in a vertical stack.',
            codeblock: {
              title: 'Adjust the size',
              tabs: [
                {
                  title: '',
                  code: './examples/different-sizes.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Respond to image loading success or failure. This example uses `load` and `error` event listeners to update the UI based on the loading result.',
            codeblock: {
              title: 'Handle load events',
              tabs: [
                {
                  title: '',
                  code: './examples/with-event-handling.html',
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
