import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'The EmailField component captures email address input from customers with built-in validation. Use it to collect email information in forms, customer profiles, or contact workflows.\n\nThe component includes built-in email format validation using standard email patterns to ensure data quality. It provides real-time feedback on invalid entries and supports features like autocomplete and keyboard optimization for email input, helping merchants quickly capture valid customer contact information during checkout or registration workflows.\n\nEmailField components integrate with browser autocomplete features to speed up email entry by suggesting previously used addresses, significantly reducing typing time during customer registration workflows.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the EmailField component.',
      type: 'EmailFieldProps',
    },
  ],
  defaultExample: {
    image: 'email-field-default.png',
    codeblock: generateCodeBlock(
      'Capture email input with validation',
      'email-field',
      'email-input',
    ),
    description:
      'Capture customer email addresses with built-in format validation. This example shows how to implement an EmailField that validates email syntax in real-time, provides autocomplete support, and optimizes the keyboard for email entry, ensuring accurate customer contact information.',
  },
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  thumbnail: 'email-field-thumbnail.png',

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Provide helpful guidance with placeholder and helpText:** Use placeholder text for format examples like \`customer@example.com\` and the \`helpText\` property for additional context like "Required for digital receipts" or "We'll send order updates to this address."\n- **Implement proper email validation:** Use the \`error\` property to display validation messages when users enter invalid email formats. Provide clear, actionable error messages like "Please enter a valid email address" that help users correct their input.\n- **Use the email-optimized keyboard:** EmailField automatically display the email-optimized keyboard on mobile devices with easy access to \`@\` and domain symbols. This improves input speed and reduces errors on touch devices.\n- **Use the required property appropriately:** Set \`required\` to \`true\` for fields that must have a value. While this adds semantic meaning, you must still implement validation logic and use the \`error\` property to display validation errors to users.\n- **Add action buttons for enhanced functionality:** Use the \`action\` property to provide helpful actions like "Validate Email," "Use Default Email," or "Clear Field." This enhances usability by providing quick access to common operations.\n- **Differentiate between input and change callbacks:** Use \`onInput\` for immediate feedback like clearing validation errors as soon as users start typing. Reserve \`onChange\` for updating the field value when editing is complete. Never use \`onInput\` to update the \`value\` property.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- EmailField provides the input interface but doesn't perform automatic email validation—you must implement validation logic and use the \`error\` property to display validation results.\n- The \`required\` property adds semantic meaning only—it doesn't trigger automatic error display or prevent form submission without additional validation logic.\n- Action buttons are limited to simple press callbacks—complex action workflows require custom implementation or additional components.\n`,
    },
  ],
};

export default data;
