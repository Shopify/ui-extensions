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
      title: 'Methods',
      description:
        'The `PinPadApi` object provides methods for displaying secure PIN entry interfaces. Access these methods through `shopify.pinPad` to show PIN pad modals and handle PIN validation.',
      type: 'PinPadApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Implement secure PIN validation:** Validate PINs securely on your backend service rather than in client-side code, using the `onSubmit` callback to communicate with your secure validation endpoint.\n' +
        '- **Provide clear user feedback:** Use appropriate labels, titles, and error messages to guide users through the PIN entry process.\n' +
        '- **Handle PIN entry appropriately:** Implement proper error handling for PIN validation failures, provide retry mechanisms, and ensure sensitive PIN data is handled securely throughout the process.\n' +
        '- **Configure appropriate PIN constraints:** Set reasonable PIN length requirements and masking options based on your security requirements and user experience considerations.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
PIN validation must be handled through the \`onSubmit\` callback and should be performed securely on your backend service rather than in client-side extension code.
`,
    },
  ],
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
          'Present a secure PIN pad interface to collect and validate user PINs for authentication or verification. This example shows how to use `shopify.pinPad.show()` to display a PIN entry modal with customizable options. By handling the entered PIN securely and processing the result, you can implement secure authentication workflows.',
      },
    ],
  },
};

export default data;
