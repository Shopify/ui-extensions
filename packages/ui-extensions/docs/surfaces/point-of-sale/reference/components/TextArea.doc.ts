import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'The TextArea component captures longer text content with a multi-line, resizable text input area. Use it to collect descriptions, notes, comments, or other extended text input in forms and data entry workflows.\n\nThe component provides a multi-line text input area that accommodates longer content. It supports validation and multi-line formatting, making it ideal for capturing detailed information such as order notes, product descriptions, or customer feedback that requires more than single-line input.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the TextArea component.',
      type: 'TextAreaProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  thumbnail: 'text-area-thumbnail.png',
  defaultExample: {
    image: 'text-area-default.png',
    codeblock: generateCodeBlock(
      'Capture multi-line text input',
      'text-area',
      'default.example',
    ),
    description:
      'Collect longer text content using a multi-line resizable input area. This example shows a TextArea that supports validation and multi-line formatting, ideal for capturing descriptions, notes, comments, or extended information in forms and data entry workflows.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Provide helpful guidance with helpText and placeholder:** Use \`helpText\` for explain content expectations, formatting requirements, or character limits. Use placeholder text to provide examples of the expected content format or structure.\n- **Implement character limits appropriately:** Set \`maxLength\` to prevent excessively long input that might cause display or processing issues. Provide feedback about character limits in the \`helpText\`, especially when users are approaching the limit.\n- **Use clear and specific labels:** Provide descriptive labels that indicate what type of text content is expected, like specific examples rather than generic terms.\n- **Handle validation for required fields:** The \`required\` property adds semantic meaning only. Implement validation logic in your onChange callback to check empty values and display errors.\n- **Add action buttons for text operations:** Use the \`action\` property to provide helpful actions like "Clear," "Use Template," or "Format Text." This enhances usability by providing quick access to common text operations.\n- **Differentiate between input and change callbacks:** Use \`onInput\` for immediate responses that need to happen as the user types, such as clearing validation errors or providing real-time feedback. Use \`onChange\` for updating the field's value and performing actions after editing completes (typically on blur). Don't use \`onInput\` to update the \`value\` property—this can cause performance issues and unexpected behavior.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- TextArea has a maximum of 8 visible rows—content requiring more vertical space should use scrolling within the text area or alternative layouts with ScrollView components.\n- The component provides multi-line text input but doesn't include rich text formatting capabilities—complex formatting like bold, italic, or lists requires alternative solutions or plain text representations.\n- The \`required\` property adds semantic meaning only—it doesn't trigger automatic error display or validation, so you must implement validation logic manually.\n- Action buttons are limited to simple press callbacks—complex action workflows require custom implementation or additional components.\n`,
    },
  ],
};

export default data;
