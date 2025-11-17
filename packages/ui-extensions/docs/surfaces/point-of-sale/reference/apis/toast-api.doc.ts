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
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Toast API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForToastApi(
          'Display a Toast component from the tile',
          'show',
        ),
      },
    ],
  },
};

export default data;
