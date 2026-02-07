import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForToastApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'toast-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Toast API',
  description:
    "The Toast API provides temporary notification functionality for POS UI extensions, allowing you to display brief, non-intrusive messages to users for feedback, confirmations, and status updates that automatically disappear after a specified duration. Toast messages appear as overlay notifications that don't interrupt the user's workflow.",
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ToastApi` object provides properties for displaying temporary notification messages. Access these properties through `api.toast` to show user feedback and status updates.',
      type: 'ToastApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  related: [],
  examples: {
    description:
      'Learn how to display temporary notification messages for user feedback, confirmations, and status updates.',
    examples: [
      {
        codeblock: generateCodeBlockForToastApi(
          'Show a toast notification',
          'show',
        ),
        description:
          "Display a brief, non-intrusive notification message that automatically dismisses. This example demonstrates using `toast.show()` to provide immediate feedback after user actions, confirmations for successful operations, or status updates without interrupting the merchant's workflow.",
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use appropriate timing:** Choose duration values that give users enough time to read the message without keeping notifications visible longer than necessary.\n- **Provide meaningful feedback:** Use toast messages to confirm successful actions, explain errors clearly, or communicate important status changes that users need to know about.\n- **Avoid overuse:** Reserve toast notifications for important feedback and avoid showing multiple toasts simultaneously, as this can overwhelm users and reduce the effectiveness of the notifications.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Toast messages are temporary and can't be made persistent. For important information that users need to reference later, consider using other UI components or storage mechanisms.\n- Multiple toast messages may overlap or interfere with each other if shown in rapid succession. Consider queuing or spacing out notifications appropriately.\n- Toast content is limited to plain text and can't include rich formatting, links, or interactive elements.\n`,
    },
  ],
};

export default data;
