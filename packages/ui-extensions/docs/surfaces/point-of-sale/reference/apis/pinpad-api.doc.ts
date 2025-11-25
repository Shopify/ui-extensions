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
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Validate securely on backend:** Validate PINs on your backend service, not client-side. Use \`onSubmit\` to communicate with your secure endpoint.
- **Provide clear feedback:** Use appropriate labels, titles, and error messages to guide users and provide validation results.
- **Handle errors and retries:** Implement error handling for validation failures and provide retry mechanisms.
- **Configure appropriate constraints:** Set reasonable PIN length requirements and masking options based on security needs.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- PIN validation must be handled through the \`onSubmit\` callback and should be performed securely on your backend service rather than in client-side extension code.
- The PinPad API displays a modal interface that takes over the entire screen until PIN entry is complete or the modal is dismissed.
- PIN data is provided as an array of numbers and must be handled securely, following appropriate data protection and privacy practices.
`,
    },
  ],
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
