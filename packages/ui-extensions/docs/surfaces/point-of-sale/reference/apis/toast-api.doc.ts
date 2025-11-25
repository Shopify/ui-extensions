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
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Write clear, concise messages:** Keep toast content brief and actionable since users have limited time to read the message before it disappears automatically.\n' +
        '- **Use appropriate timing:** Choose duration values that give users enough time to read the message without keeping notifications visible longer than necessary.\n' +
        '- **Provide meaningful feedback:** Use toast messages to confirm successful actions, explain errors clearly, or communicate important status changes that users need to know about.\n' +
        '- **Avoid overuse:** Reserve toast notifications for important feedback and avoid showing multiple toasts simultaneously, as this can overwhelm users and reduce the effectiveness of the notifications.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Toast messages are temporary and can\'t be made persistent. For important information that users need to reference later, consider using other UI components or storage mechanisms.\n' +
        '- Multiple toast messages may overlap or interfere with each other if shown in rapid succession. Consider queuing or spacing out notifications appropriately.\n' +
        '- Toast content is limited to plain text and can\'t include rich formatting, links, or interactive elements.',
    },
  ],
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
          "Show a temporary notification message to provide user feedback. This example demonstrates using `shopify.toast.show()` to display a brief, non-intrusive message that automatically disappears after a specified duration, useful for confirmations, status updates, or success messages that don't require user interaction.",
      },
      {
        codeblock: generateJsxCodeBlockForToastApi(
          'Display a toast notification for a custom duration',
          'show-with-duration',
        ),
      },
    ],
  },
};

export default data;
