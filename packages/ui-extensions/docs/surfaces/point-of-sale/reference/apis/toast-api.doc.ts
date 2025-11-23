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
      title: 'ToastApi',
      description:
        'The `ToastApi` object provides methods for displaying temporary notification messages. Access these methods through `api.toast` to show user feedback and status updates.',
      type: 'ToastApiContent',
    },
  ],
  category: 'APIs',
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
};

export default data;
