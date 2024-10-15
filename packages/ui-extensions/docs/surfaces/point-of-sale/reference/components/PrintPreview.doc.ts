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
      name: 'Print API',
      subtitle: 'See how to use the Print API.',
      url: '/api/pos-ui-extensions/apis/print-api',
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
