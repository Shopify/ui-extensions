import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintPreview = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-preview', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'PrintPreview',
  description: 'Renders a `PrintPreview`.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'PrintPreview',
      description: '',
      type: 'PrintPreviewProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'Printer API',
      subtitle: 'See how to use the Printer API.',
      url: '/api/pos-ui-extensions/apis/printer-api',
    },
  ],
  defaultExample: {
    codeblock: generateCodeBlockForPrintPreview(
      'Render a PrintPreview and a button for printing',
      'default.example',
    ),
  },
};

export default data;
