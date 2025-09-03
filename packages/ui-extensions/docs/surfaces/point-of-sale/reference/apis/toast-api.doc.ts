import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForToastApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'toast-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Toast API',
  description: 'The Toast API allows the display of a Toast component.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ToastApi',
      description: '',
      type: 'ToastApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Toast API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForToastApi(
          'Display a Toast component from the tile',
          'show',
        ),
      },
    ],
  },
};

export default data;
