import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForTile = (title: string, fileName: string) =>
  generateCodeBlock(title, 'tile', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'The Tile component displays interactive buttons for the POS smart grid that allow merchants to complete actions quickly. Tiles serve as customizable shortcuts that provide contextual information and enable merchants to quickly access workflows, actions, and information from the smart grid.\n\nTiles are dynamic components that can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They support tap interactions, visual feedback, and can display contextual information through titles, subtitles, and badge values.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Tile component.',
      type: 'TileProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  related: [],
  thumbnail: 'tile-thumbnail.png',
  defaultExample: {
    image: 'tile-default.png',
    codeblock: generateCodeBlockForTile(
      'Show a smart grid tile',
      'default.example',
    ),
    description:
      'Display an interactive button on the POS smart grid for quick actions. This example shows how to create a tile that provides merchants with customizable shortcuts, displaying contextual information through titles, subtitles, and badges while supporting tap interactions and dynamic state changes.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Provide contextual subtitles:** Show dynamic information like cart totals, eligibility requirements, current status, or helpful context. Subtitles should complement the title by providing additional details staff need before taking action.
- **Use meaningful badge values:** Display counts that represent actionable items or important status information like pending notifications, items requiring action, or error counts. Badge values work best when they represent actionable information rather than purely informational counts.
- **Design tiles as workflow entry points:** Use tiles primarily to launch modal experiences using \`api.action.presentModal()\` rather than performing complex operations directly. Store contextual data before presenting modals.
- **Update properties efficiently:** Dynamically enable or disable tiles based on cart state, user permissions, or business rules. Only call \`updateProps()\` when displayed values actually change, and batch multiple property updates into single calls.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Each POS UI extension can only render one Tile component.
- Badge values must be numeric-string or text badges aren't supported.
- Custom icons, images, or visual styling beyond built-in properties aren't supported.
- Tile size and layout is determined by the smart grid and can't be customized.
- The Tile component is limited to tap interactions only. There's no support for long press, swipe, or other gestures.
- Title and subtitle text must be plain strings-no HTML, markdown, or rich text formatting.
      `,
    },
  ],
};

export default data;
