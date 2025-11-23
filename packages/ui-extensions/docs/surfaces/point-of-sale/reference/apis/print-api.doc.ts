import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForPrintApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'print-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Print API',
  description:
    'The Print API enables document printing functionality in your POS UI extension. Use this API to trigger the native print dialog for your documents.' +
    '\n\nSupported document types:' +
    '\n\n- **HTML documents** (`.html`, `.htm`) - Best printing experience with full CSS styling, embedded images, and complex layouts. Use for receipts, invoices, and formatted reports.' +
    '\n\n- **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular data support. Use for simple receipts and data exports.' +
    '\n\n- **Image files** (`.png`, `.jpg`, `.jpeg`, `.gif`, `.bmp`, `.webp`) - Common web formats with format-specific optimizations. Use for logos, charts, QR codes, and barcodes.' +
    '\n\n- **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on iOS/desktop, but downloads to external viewer on Android. Use for complex documents and compliance requirements.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PrintApi',
      description:
        'The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.',
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
      url: '/docs/apps/build/pos/build-print-extension?extension=preact',
    },
  ],
  examples: {
    description:
      'Learn how to trigger document printing for receipts, labels, and custom documents.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForPrintApi(
          'Print a document directly from a tile',
          'print',
        ),
        description:
          'Trigger the native print dialog from a smart grid tile action. This example shows how to use `shopify.print()` to print a document specified by a relative path, allowing quick printing of receipts, labels, or reports directly from the POS home screen.',
      },
      {
        codeblock: generateJsxCodeBlockForPrintApi(
          'Print from a remote URL',
          'print-full-url',
        ),
        description:
          'Print documents hosted on external servers using full URLs. This example shows how to use `shopify.print()` with a complete URL to print remotely hosted documents, enabling dynamic content generation or printing from external services.',
      },
      {
        codeblock: generateJsxCodeBlockForPrintApi(
          'Print using a relative file path',
          'print-relative',
        ),
        description:
          'Print documents using relative paths within your extension bundle. This example demonstrates using `shopify.print()` with a relative path to reference HTML, text, image, or PDF files included in your extension, making it easy to print pre-defined templates or documents.',
      },
    ],
  },
};

export default data;
