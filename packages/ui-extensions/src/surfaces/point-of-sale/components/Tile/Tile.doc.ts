import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'The `Tile` component displays interactive buttons for the POS smart grid that allow merchants to complete actions quickly. Tiles serve as customizable shortcuts that provide contextual information and enable merchants to quickly access workflows, actions, and information from the smart grid.' +
    '\n\nTiles are dynamic components that can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They support tap interactions, visual feedback, and can display contextual information through titles, subtitles, and badge values.',
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
        'The `Tile` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TileEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Write action-oriented headings:** Use specific language like "Apply loyalty discount" rather than generic terms like "Loyalty app."\n' +
        '- **Provide contextual subheadings:** Show dynamic information like cart totals, eligibility requirements, or current status.\n' +
        '- **Use meaningful item counts:** Display counts for actionable items like pending notifications or items requiring action, not just informational counts.\n' +
        '- **Launch modals for workflows:** Use `onClick` with `shopify.action.presentModal()` rather than performing complex operations directly.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Each POS UI extension can only render one `Tile` component per tile target.\n' +
        '- The `itemCount` property only accepts numeric values—string or text badges aren\'t supported.\n' +
        '- Custom icons, images, or visual styling beyond the built-in `tone` property aren\'t supported.\n' +
        '- Tile size and layout are determined by the smart grid system and can\'t be customized.\n' +
        '- The `Tile` component supports click and long press interactions only. Swipe, drag, and other gestures aren\'t supported.\n' +
        '- The `heading` and `subheading` properties must be plain strings—HTML, markdown, or rich text formatting isn\'t supported.',
    },
  ],
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
  related: [],
};

export default data;
