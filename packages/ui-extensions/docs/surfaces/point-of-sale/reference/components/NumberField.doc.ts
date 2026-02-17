import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'The NumberField component captures numeric input with built-in validation. Use it to collect quantity, price, or other numeric information with proper validation.\n\nThe component includes built-in number validation, optional min/max constraints, and step increments to ensure accurate numeric data entry. It supports various number formats including integers and decimals, with validation feedback to prevent entry errors during high-volume retail operations.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the NumberField component.',
      type: 'NumberFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  defaultExample: {
    image: 'number-field-default.png',
    codeblock: generateCodeBlock(
      'Capture numeric input with validation',
      'number-field',
      'number-input',
    ),
    description:
      'Collect numeric information using an optimized input field with built-in validation. This example shows how to implement a NumberField that validates numeric entries, supports optional min/max constraints, and provides step increments for quantities, prices, or other numeric data.',
  },
  thumbnail: 'number-field-thumbnail.png',

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Select the right input mode for your data type:** Use \`'decimal'\` input mode for prices, measurements, or any values requiring decimal precision. Use \`'numeric'\` for quantities, counts, or integer values where decimal points aren't needed. This optimizes the keyboard layout for the expected input.\n- **Provide helpful guidance with helpText:** Use the \`helpText\` property to explain numeric constraints, valid ranges, units, or formatting expectations. For example, "Enter a quantity between 1 and 999" or "Price in dollars with two decimal places."\n- **Implement proper validation logic:** While \`min\`/\`max\` properties provide guidance, they don't prevent invalid keyboard input. Implement validation in your \`onChange\` callback to check bounds, format, and other requirements, then display errors using the \`error\` property.\n- **Use action buttons for enhanced functionality:** Use the \`action\` property to provide helpful actions like "Clear Field," "Set to Minimum," or "Calculate Total." This enhances usability by providing quick access to common numeric operations.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- NumberField provides numeric input but doesn't enforce \`min\`/\`max\` constraints for keyboard input—you must implement validation logic to enforce bounds and display appropriate errors.\n- The \`required\` property adds semantic meaning only—it doesn't trigger automatic error display or prevent form submission without additional validation logic.\n- Action buttons are limited to simple press callbacks—complex action workflows require custom implementation or additional components.\n`,
    },
  ],
};

export default data;
