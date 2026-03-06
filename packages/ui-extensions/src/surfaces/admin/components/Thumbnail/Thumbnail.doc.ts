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
      sectionContent: `- Identifying items visually in lists, tables, or cards.
- Seeing a preview of images before uploading or publishing.
- Distinguishing between similar items by their appearance.
- Confirming the correct item is selected.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- \`small-200\`: use in very small areas.
- \`small\`: use in small areas.
- \`base\`: use as the default size.
- \`large\`: use when thumbnail is a focal point.`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `Alternative text should be accurate, concise, and descriptive:
- Use "Image of", "Photo of" prefix.
- Be primary visual content: "Image of a woman with curly brown hair smiling".
- Include relevant emotions: "Image of a woman laughing with her hand on her face".`,
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
        'The thumbnail component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
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
