import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {
  generateCodeBlock,
  generateTSXCodeBlock,
} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Print API',
  description: `The Print API enables document printing functionality in your point of sale extension. Use this API to trigger the native print dialog for your documents.

The \`print()\` method accepts either:
- A relative path that will be appended to your app's [application_url](/docs/apps/build/cli-for-apps/app-configuration#application_url)
- A full URL to your app's backend that will be used to return the document to print

Supported document types:
- HTML documents (recommended for best printing experience)
- Text files
- Image files (PNG, JPEG, etc.)
- PDF files (Note: On Android devices, PDFs will be downloaded and must be printed using an external application)`,
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
