import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {
  generateCodeBlock,
  generateTSXCodeBlock,
} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Print API',
  description: `The Print API enables document printing through the device's native print dialog (such as AirPrint on iOS or the system print dialog on Android). This API is designed for printing documents to standard printers, and does not support direct printing to receipt printers.`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PrintApi',
      description: 'Interface for handling print operations',
      type: 'PrintApiContent',
    },
  ],
  category: 'APIs',
  related: [
    {
      name: 'PrintPreview Component',
      subtitle: 'Preview documents before printing',
      url: '/api/pos-ui-extensions/components/printpreview',
    },
    {
      name: 'Build a Print Extension',
      subtitle: 'Learn how to implement printing',
      url: '/docs/api/pos-ui-extensions/examples/print-extension',
    },
  ],
  examples: {
    description: 'Examples of using the Print API',
    examples: [
      {
        codeblock: generateCodeBlockForPrintApi(
          'Print directly from the tile',
          'print',
        ),
      },
      {
        codeblock: generateTSXCodeBlock(
          'Print with relative path',
          'print-api',
          'print-relative',
        ),
      },
      {
        codeblock: generateTSXCodeBlock(
          'Print with full URL',
          'print-api',
          'print-full-url',
        ),
      },
    ],
  },
};

export default data;
