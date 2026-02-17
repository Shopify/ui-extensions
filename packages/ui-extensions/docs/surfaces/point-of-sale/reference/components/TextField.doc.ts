import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'The TextField component captures single-line text input. Use it to collect short, free-form information in forms and data entry workflows.\n\nThe component supports various input configurations including placeholders, character limits, and validation. It includes built-in support for labels, helper text, and error states to guide merchants through data entry, ensuring accurate and efficient information capture across different retail scenarios.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the TextField component.',
      type: 'NewTextFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  thumbnail: 'text-field-thumbnail.png',
  defaultExample: {
    image: 'text-field-default.png',
    codeblock: generateCodeBlock(
      'Capture single-line text input',
      'text-field',
      'name',
    ),
    description:
      'Collect short, free-form text using a single-line input field. This example shows a TextField with labels, placeholders, and validation support, ensuring accurate and efficient information capture for forms and data entry workflows.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Set initial focus appropriately:** When merchants open a new form, set focus on the first text field automatically to streamline data entry and reduce the number of interactions required to begin input.\n- **Write clear and concise labels:** Write labels in sentence case and keep them brief. Use consistent terminology for similar fields throughout the app to create a predictable and familiar experience for merchants.\n- **Indicate required fields clearly:** When a text field is required for form submission, use the \`required\` property and display a "Required" indicator. Implement validation logic in your \`onChange\` callback to check empty values and display errors.\n- **Provide helpful guidance with helpText and placeholder:** Use \`helpText\` for explain content expectations, formatting requirements, or character limits. Use placeholder text to provide examples of the expected content format or structure.\n- **Support autocomplete when appropriate:** Provide autocomplete options for fields where merchants commonly enter predictable values, such as addresses, product names, or customer information.\n- **Implement character limits appropriately:** Set \`maxLength\` to prevent excessively long input that might cause display or processing issues. Provide feedback about character limits in the \`helpText\`, especially when users are approaching the limit.\n- **Use action buttons for enhanced functionality:** Use the \`action\` property to provide helpful actions like "Clear Field," "Generate Code," or "Use Default." This enhances usability by providing quick access to common text operations.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- TextField provides single-line text input only—multi-line text entry requires the TextArea component.\n- The \`required\` property adds semantic meaning only—it doesn't trigger automatic error display or validation, so you must implement validation logic manually.\n- Action buttons are limited to simple press callbacks—complex action workflows require custom implementation or additional components.\n`,
    },
  ],
};

export default data;
