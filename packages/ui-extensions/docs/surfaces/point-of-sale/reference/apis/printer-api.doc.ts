import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrinterApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'printer-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Printer API',
  description: `
The Printer API provides access to printing functionality.
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PrinterApi',
      description: '',
      type: 'PrinterApiContent',
    },
  ],
  category: 'APIs',
  related: [
    {
      name: 'PrintPreview Component',
      subtitle: 'See how to use the Printer API with a PrintPreview.',
      url: '/api/pos-ui-extensions/components/printpreview',
    },
  ],
  examples: {
    description: 'Examples of using the Printer API',
    examples: [
      {
        codeblock: generateCodeBlockForPrinterApi(
          'Print directly from the tile',
          'print',
        ),
      },
    ],
  },
};

export default data;
