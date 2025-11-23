import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForPinPadApi = (title: string, fileName: string) =>
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
    description:
      'Learn how to display secure PIN entry interfaces and handle PIN validation.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForPinPadApi(
          'Display a PIN pad and validate user input',
          'validation',
        ),
        description:
          'Present a secure PIN pad interface to collect and validate user PINs for authentication or verification. This example shows how to use `shopify.pinPad.show()` to display a PIN entry modal with customizable options, handle the entered PIN securely, and process the result for secure authentication workflows.',
      },
    ],
  },
};

export default data;
