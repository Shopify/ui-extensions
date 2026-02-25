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
      description: 'Configure the following properties on the Tile component.',
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
      'Create a smart grid tile',
      'default.example',
    ),
    description:
      'Display an interactive button on the POS smart grid for quick actions. This example shows a Tile that provides customizable shortcuts with contextual information, titles, subtitles, and badge values, enabling merchants to quickly access workflows and complete actions from the smart grid.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Provide contextual subtitles:** Show dynamic information like cart totals, eligibility requirements, current status, or helpful context. Subtitles should complement the title by providing additional details staff need before taking action.\n- **Use meaningful badge values:** Display counts that represent actionable items or important status information like pending notifications, items requiring action, or error counts. Badge values work best when they represent actionable information rather than purely informational counts.\n- **Design tiles as workflow entry points:** Use tiles primarily to launch modal experiences using \`api.action.presentModal()\` rather than performing complex operations directly. Store contextual data before presenting modals.\n- **Update properties efficiently:** Dynamically enable or disable tiles based on cart state, user permissions, or business rules. Only call \`updateProps()\` when displayed values actually change, and batch multiple property updates into single calls.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Each POS UI extension can only render one Tile component.\n- Badge values must be numeric-string or text badges aren't supported.\n- Custom icons, images, or visual styling beyond built-in properties aren't supported.\n- Tile size and layout is determined by the smart grid and can't be customized.\n- The Tile component is limited to tap interactions only. There's no support for long press, swipe, or other gestures.\n- Title and subtitle text must be plain strings-no HTML, markdown, or rich text formatting.\n`,
    },
  ],
};

export default data;
