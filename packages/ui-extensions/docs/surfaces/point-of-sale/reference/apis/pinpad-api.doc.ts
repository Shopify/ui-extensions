import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForToastApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'pinpad-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'PinPad API',
  description:
    'The PinPad API allows the display of a PinPad component for PIN validation.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PinPadApi',
      description: '',
      type: 'PinPadApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the PinPad API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForToastApi(
          'Display a PinPad and validate the PIN',
          'validation',
        ),
      },
    ],
  },
};

export default data;
