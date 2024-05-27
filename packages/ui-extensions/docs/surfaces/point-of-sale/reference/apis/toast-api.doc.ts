import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForToastApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'toast-api', fileName);

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
        codeblock: generateCodeBlockForToastApi(
          'Display a Toast component from the tile',
          'show',
        ),
      },
    ],
  },
};

export default data;
