import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForToastApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'toast-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Toast API',
  description:
    "The Toast API provides temporary notification functionality for POS UI extensions, allowing you to display brief, non-intrusive messages to users for feedback, confirmations, and status updates that automatically disappear after a specified duration. Toast messages appear as overlay notifications that don't interrupt the user's workflow.",
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ToastApi',
      description:
        'The `ToastApi` object provides methods for displaying temporary notification messages. Access these methods through `shopify.toast` to show user feedback and status updates.',
      type: 'ToastApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Write clear, concise messages:** Keep content brief since toasts disappear automatically.
- **Use appropriate timing:** Choose durations that give users enough time to read without keeping visible too long.
- **Provide meaningful feedback:** Use toasts to confirm actions, explain errors, or communicate status changes.
- **Avoid overuse:** Reserve for important feedback. Don't show multiple toasts simultaneously.
- **Handle multiple toast messages:** Multiple toast messages may overlap or interfere with each other if shown in rapid succession. Consider queuing or spacing out notifications appropriately.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Toast content is limited to plain text and can't include rich formatting, links, or interactive elements.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to display temporary notification messages for user feedback.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForToastApi(
          'Display a toast notification from a tile',
          'show',
        ),
        description:
          "Display a toast notification from a tile. This example demonstrates using `shopify.toast.show()` to display a brief, non-intrusive message that automatically disappears after a specified duration. This is useful for confirmations, status updates, or success messages that don't require user interaction.",
      },
    ],
  },
};

export default data;
