import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForButton = (title: string, fileName: string) =>
  generateCodeBlock(title, 'button', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'The Button component triggers actions or events, such as opening dialogs or navigating to other pages. Use Button to let merchants perform specific tasks or initiate interactions throughout the POS interface.\n\nButtons provide clear calls-to-action that guide merchants through workflows, enable form submissions, and trigger important operations. They support various visual styles, tones, and interaction patterns to communicate intent and hierarchy within the interface.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Button component.',
      type: 'ButtonProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  related: [],
  thumbnail: 'button-thumbnail.png',
  defaultExample: {
    image: 'button-default.png',
    codeblock: generateCodeBlockForButton('Show a button', 'default.example'),
    description:
      'Display a button that responds to user interactions. This example shows a button that displays a toast notification when pressed, demonstrating how to handle button taps and provide immediate feedback to merchants.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Choose appropriate variants and tones:** Use \`primary\` variant for the most important action on a screen, \`secondary\` for supporting actions, and \`tertiary\` for less prominent options. Apply \`critical\` tone for destructive actions like "Delete order," \`success\` for positive actions like "Complete sale," and \`caution\` or \`warning\` for actions requiring attention.\n- **Provide loading states for async operations:** Set the \`loading\` property to \`true\` during async operations.\n- **Use the command system for component control:** Use \`commandFor\` and \`command\` properties to control modals, overlays, and other components without complex event handlers.\n- **Structure button hierarchies clearly:** Place primary and secondary actions together using consistent spacing and visual hierarchy. Position destructive actions separately or use confirmation patterns to prevent accidental activation.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Button titles must be plain strings. HTML, markdown, or rich text formatting isn't supported.\n- Loading states replace all button content with a spinner. Custom loading indicators or partial content updates aren't supported.\n- Complex button layouts or nested interactive components within buttons aren't supported.\n`,
    },
  ],
};

export default data;
