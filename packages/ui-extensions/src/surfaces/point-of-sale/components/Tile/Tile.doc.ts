import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'The `Tile` component displays interactive buttons for the POS smart grid that allow merchants to complete actions quickly. Tiles serve as customizable shortcuts that provide contextual information and enable merchants to quickly access workflows, actions, and information from the smart grid.' +
    '\n\nTiles are dynamic components that can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They support tap interactions, visual feedback, and can display contextual information through titles, subtitles, and badge values.' +
    "\n\nTo maintain a consistent visual experience, tile size and layout are determined by the smart grid system, and custom icons and images aren't supported." +
    '\n\nEach POS UI extension can only render one `Tile` component for each [home screen tile target](/docs/api/pos-ui-extensions/2026-01-rc/targets/home-screen#home-screen-tile-).',
  thumbnail: 'tile-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Tile` component.',
      type: 'Tile',
    },
    {
      title: 'Events',
      description:
        'The `Tile` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-home/using-polaris-components#handling-events).',
      type: 'TileEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'tile-default.png',
    description:
      'Create interactive smart grid shortcuts using a `Tile` component with customizable title, subtitle, and badge. This example shows a basic tile for the POS smart grid.',
    codeblock: {
      title: 'Create a smart grid tile',
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
- **Write action-oriented headings:** Use specific language like "Apply loyalty discount" rather than generic terms like "Loyalty app."
- **Provide contextual subheadings:** Show dynamic information like cart totals, eligibility requirements, or current status.
- **Use meaningful item counts:** Display counts for actionable items like pending notifications or items requiring action, not just informational counts.
- **Launch modals for workflows:** Use \`onClick\` with \`shopify.action.presentModal()\` rather than performing complex operations directly.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The \`Tile\` component supports click and long press interactions only. Swipe, drag, and other gestures aren't supported.
`,
    },
  ],
  related: [],
};

export default data;
