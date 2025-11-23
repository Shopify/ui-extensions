import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintPreview = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-preview', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'PrintPreview',
  description:
    'The `PrintPreview` component displays a preview of printable content from a specified source URL. Use it to show users what will be printed before triggering the actual print operation.\n\n`PrintPreview` works in conjunction with the Print API to provide complete print functionality from preview to execution.\n\nSupported document types:\n\n- **HTML documents** (`.html`, `.htm`) - Best printing experience with full CSS styling, embedded images, and complex layouts. Use for receipts, invoices, and formatted reports.\n\n- **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular data support. Use for simple receipts and data exports.\n\n- **Image files** (`.png`, `.jpg`, `.jpeg`, `.gif`, `.bmp`, `.webp`) - Common web formats with format-specific optimizations. Use for logos, charts, QR codes, and barcodes.\n\n- **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on iOS/desktop, but downloads to external viewer on Android. Use for complex documents and compliance requirements.\n\n[Learn how to build a print extension in POS](/docs/apps/build/pos/build-print-extension).',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'print-preview-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `PrintPreview` component. This component must be a direct child of the Screen component.',
      type: 'PrintPreviewProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'Print API',
      subtitle: 'Handle print operations',
      url: '/api/pos-ui-extensions/apis/print-api',
    },
    {
      name: 'Build a Print Extension',
      subtitle: 'Learn how to implement printing',
      url: '/docs/api/pos-ui-extensions/examples/print-extension',
    },
  ],
  defaultExample: {
    image: 'print-preview-default.png',
    codeblock: generateCodeBlockForPrintPreview(
      'Preview printable content',
      'default.example',
    ),
    description:
      'Display a preview of printable content before triggering the print operation. This example shows how to use PrintPreview with HTML documents, PDFs, images, or text files, supporting various document formats with proper rendering for receipts, invoices, and formatted reports.',
  },
};

export default data;
