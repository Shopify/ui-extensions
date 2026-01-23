import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Thumbnail';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/thumbnail.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Identifying items visually in lists, tables, or cards
- Seeing a preview of images before uploading or publishing
- Distinguishing between similar items by their appearance
- Confirming the correct item is selected`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- \`small-200\`: use in very small areas
- \`small\`: use in small areas
- \`base\`: use as the default size
- \`large\`: use when thumbnail is a focal point`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `Alternative text should be accurate, concise, and descriptive:
- Use "Image of", "Photo of" prefix
- Be primary visual content: "Image of a woman with curly brown hair smiling"
- Include relevant emotions: "Image of a woman laughing with her hand on her face"`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Thumbnail',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
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
