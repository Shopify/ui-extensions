import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {
  generateCodeBlock,
  generateTSXCodeBlock,
} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Print API',
  description:
    'The Print API enables document printing functionality in your POS UI extension. Use this API to trigger the native print dialog for your documents.' +
    '\n\nSupported document types:' +
    '\n\n- **HTML documents** (`.html`, `.htm`) - Best printing experience with full CSS styling, embedded images, and complex layouts. Use for receipts, invoices, and formatted reports.' +
    '\n- **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular data support. Use for simple receipts and data exports.' +
    '\n- **Image files** (`.png`, `.jpg`, `.jpeg`, `.gif`, `.bmp`, `.webp`) - Common web formats with format-specific optimizations. Use for logos, charts, QR codes, and barcodes.' +
    '\n- **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on iOS/desktop, but downloads to external viewer on Android. Use for complex documents and compliance requirements.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PrintApi',
      description:
        'The `PrintApi` object provides methods for triggering document printing. Access these methods through `api.print` to initiate print operations with various document types.',
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
