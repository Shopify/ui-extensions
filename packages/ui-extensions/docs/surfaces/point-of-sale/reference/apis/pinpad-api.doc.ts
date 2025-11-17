import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForToastApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'pinpad-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'PinPad API',
  description:
    'The PinPad API provides secure PIN entry functionality for POS UI extensions, allowing you to display modal PIN pad interfaces for secure PIN collection, validation, and processing with customizable options and callback handling. The API enables secure authentication workflows within your extensions.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'PinPadApi',
      description:
        'The `PinPadApi` object provides methods for displaying secure PIN entry interfaces. Access these methods through `shopify.pinPad` to show PIN pad modals and handle PIN validation.',
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
