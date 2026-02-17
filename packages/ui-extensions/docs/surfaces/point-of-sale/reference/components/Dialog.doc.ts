import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForDialog = (title: string, fileName: string) =>
  generateCodeBlock(title, 'dialog', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Dialog',
  description:
    'The Dialog component displays a modal that requires user attention and interaction. Use dialogs to present important information, confirm actions, or collect input from merchants in a focused overlay that interrupts the current workflow until resolved.\n\nThe component creates a modal overlay that focuses user attention on important decisions or information, blocking interaction with underlying content until dismissed. It supports various configurations including alert dialogs, confirmation dialogs, and custom content dialogs, with built-in button layouts and keyboard shortcuts for efficient navigation and decision-making.\n\nDialog components provide customizable button layouts and keyboard shortcuts that follow platform conventions, ensuring merchants can quickly approve or dismiss dialogs through familiar interaction patterns.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Dialog component.',
      type: 'DialogProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Feedback and status indicators',
  related: [],
  thumbnail: 'dialog-thumbnail.png',
  defaultExample: {
    image: 'dialog-default.png',
    codeblock: generateCodeBlockForDialog(
      'Show a confirmation dialog',
      'default.example',
    ),
    description:
      'Present important information or confirmations that require user attention. This example demonstrates a Dialog that overlays the interface to display alerts, confirmations, or input prompts with customizable buttons and actions, blocking interaction until merchants respond.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Write clear, concise content:** Use brief, action-oriented titles and essential context without overwhelming users.\n- **Use meaningful button text:** Use specific text like Delete Order and Keep Order rather than generic OK and Cancel.\n- **Frame confirmations as questions:** For confirmations, use questions like Delete this order? rather than Are you sure?\n- **Use destructive type for irreversible actions:** Set \`destructive\` for deletions to display red buttons as visual warnings.\n- **Use OK for informational dialogs:** For acknowledgment-only dialogs, use a single OK button.\n- **Structure error dialogs effectively:** Use the header to communicate the problem, body and button to communicate the solution.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Content space is limited, so keep dialog text concise and avoid lengthy explanations that might not fit properly on smaller POS displays.\n- Dialogs require explicit visibility management through the \`isVisible\` property and don\`t automatically dismiss based on time or external events.\n- Multiple dialogs can't be displayed simultaneously—showing a new dialog while another is visible may cause unexpected behavior.\n`,
    },
  ],
};

export default data;
