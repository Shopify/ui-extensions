import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'formatted-text-field', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'FormattedTextField',
  description:
    'This component is deprecated. Use the [`TextField`](/docs/api/pos-ui-extensions/components/textfield) component instead. Use a formatted text field when you require additional functionality such as the text field input type or a custom validator.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'FormattedTextField',
      description: '',
      type: 'FormattedTextFieldProps',
    },
    {
      title: 'InputType',
      description: '',
      type: 'InputType',
    },
    {
      title: 'AutoCapitalizationType',
      description: '',
      type: 'AutoCapitalizationType',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  thumbnail: 'formatted-text-field-thumbnail.png',
  defaultExample: {
    image: 'formatted-text-field-default.png',
    codeblock: generateCodeBlockForComponent(
      'Capture formatted text input',
      'default.example',
    ),
    description:
      'Collect text input with specific formatting patterns and validation rules. This example demonstrates a FormattedTextField that applies real-time formatting as users type, supports custom input masks, and optimizes keyboard types for different data formats like phone numbers or postal codes.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Apply auto-capitalization based on content type:** Use \`'sentences'\` for prose or descriptions, \`'words'\` for names and titles, \`'characters'\` for codes or identifiers that should be uppercase, and \`'none'\` when capitalization should be controlled by the user.
- **Manage validation with isValid and errorMessage:** Set \`isValid\` to false and provide a clear \`errorMessage\` when input doesn't meet requirements. Update these properties as users type to provide immediate feedback about validation status.
- **Use initialValue for pre-populated fields:** Set \`initialValue\` when editing existing data or providing default values. This helps users by reducing the amount of typing required and providing context for expected input.
- **Provide helpful placeholder text:** Use placeholder text to show input format examples, especially for specialized input types like currency ("$0.00"), gift cards ("XXXX-XXXX-XXXX"), or email (\`user@example.com\`).
- **Implement real-time validation with onChangeText:** Use the \`onChangeText\` callback to validate input as users type, providing immediate feedback and preventing invalid submissions. Update \`isValid\` and \`errorMessage\` based on validation results.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`FormattedTextField\` provides keyboard optimization and basic validation UI but doesn't perform automatic formatting—you must implement formatting logic in your \`onChangeText\` callback for currency, phone numbers, or other formatted values.
- The \`isValid\` property controls visual styling only—it doesn't prevent form submission or enforce validation automatically, requiring custom validation logic.
- Input types optimize the keyboard layout but don't enforce format restrictions—users can still enter any characters, so validation in \`onChangeText\` is essential.
`,
    },
  ],
};

export default data;
