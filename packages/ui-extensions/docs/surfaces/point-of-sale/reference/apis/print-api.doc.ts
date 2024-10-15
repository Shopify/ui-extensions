import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Print API',
  description: `
The Print API provides access to printing functionality.
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PrintApi',
      description: '',
      type: 'PrintApiContent',
    },
  ],
  category: 'APIs',
  related: [
    {
      name: 'PrintPreview Component',
      subtitle: 'See how to use the Print API with a PrintPreview.',
      url: '/api/pos-ui-extensions/components/printpreview',
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
    ],
  },
};

export default data;
