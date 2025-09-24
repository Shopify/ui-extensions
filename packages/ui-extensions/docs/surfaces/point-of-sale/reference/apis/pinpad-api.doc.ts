import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForToastApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'pinpad-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Pinpad API',
  description:
    'The Pinpad API allows the display of a Pinpad component for PIN validation.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PinpadApi',
      description: '',
      type: 'PinPadApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Pinpad API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForToastApi(
          'Display a Pinpad and validate the PIN',
          'validation',
        ),
      },
    ],
  },
};

export default data;
