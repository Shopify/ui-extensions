import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'The tile component displays interactive buttons for the POS smart grid. Use tiles as customizable shortcuts that allow merchants to quickly access workflows, actions, and information from the smart grid.' +
    '\n\nTiles can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They can display contextual information through titles, subtitles, and badge values.' +
    '\n\nEach POS UI extension can only render one tile component for each [home screen tile target](/docs/api/pos-ui-extensions/{API_VERSION}/targets/home-screen#home-screen-tile-).',
  thumbnail: 'tile-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the tile component.',
      type: 'Tile',
    },
    {
      title: 'Events',
      description:
        'The tile component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TileEvents',
    },
  ],
  category: 'Web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'tile-default.png',
    description:
      'Create interactive smart grid shortcuts using a tile component with customizable title, subtitle, and badge. This example shows a basic tile for the POS smart grid.',
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
The tile component supports click and long press interactions only. Swipe, drag, and other gestures aren't supported.
`,
    },
  ],
  related: [],
};

export default data;
