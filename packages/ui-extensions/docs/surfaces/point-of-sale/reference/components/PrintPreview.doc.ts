import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintPreview = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-preview', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'PrintPreview',
  description: `A component that displays a preview of a printable document. Use this component to let users review documents before printing.

The \`src\` prop accepts either:
- A relative path that will be appended to your app's [application_url](/docs/apps/build/cli-for-apps/app-configuration#application_url)
- A full URL to your document endpoint

Supported document types:
- HTML documents (recommended for best preview experience)
- Text files
- Image files (PNG, JPEG, etc.)
- PDF files (Note: On Android devices, PDFs will be downloaded and must be printed using an external application)`,
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'print-preview-thumbnail.png',
  definitions: [
    {
      title: 'PrintPreview',
      description: 'Renders a preview of a printable document',
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
    description: 'Basic usage with relative and full URLs:',
    codeblock: generateCodeBlockForPrintPreview(
      'Basic PrintPreview',
      'default.example',
    ),
  },
};

export default data;
