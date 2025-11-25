import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'The `NumberField` component captures numeric input with built-in validation. Use it to collect quantity, price, or other numeric information with optional `stepper` controls.' +
    '\n\nThe component includes built-in number validation, optional min/max constraints, and step increments to ensure accurate numeric data entry. It supports various number formats including integers and decimals, with validation feedback to prevent entry errors during high-volume retail operations.',
  thumbnail: 'number-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `NumberField` component.',
      type: 'NumberField',
    },
    {
      title: 'Slots',
      description:
        'The `NumberField` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'NumberFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The `NumberField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'NumberFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Choose appropriate controls:** Use `stepper` for quantities or small adjustments. Use `none` for prices or large values where steppers are impractical.\n' +
        '- **Select the right input mode:** Use `decimal` for prices and measurements. Use `numeric` for quantities and counts.\n' +
        '- **Explain constraints in details:** Use `details` to clarify valid ranges or formatting, like "Enter a quantity between 1 and 999."',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- `NumberField` provides numeric input but doesn't enforce `min`/`max` constraints for keyboard input—you must implement validation logic to enforce bounds and display appropriate errors.\n" +
        '- The component handles numeric input and basic format validation, but specialized number formatting like currency symbols or thousand separators requires additional formatting logic.\n' +
        '- Stepper controls work best for small ranges and adjustments—they may not be practical for large numeric ranges or precise decimal entry.',
    },
  ],
  defaultExample: {
    image: 'number-field-default.png',
    description:
      'Capture numeric input using a `NumberField` component with built-in validation and optional stepper controls. This example shows a basic number field with label and numeric validation.',
    codeblock: {
      title: 'Capture numeric input with a number field',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
  examples: {
    description:
      'Learn how to add stepper controls, set constraints, and configure keyboard layouts.',
    examples: [
      {
        description:
          'Enable stepper controls with increment and decrement buttons and set min/max constraints to limit valid input ranges. This example demonstrates using the `controls` property with `min` and `max` values to create bounded numeric inputs with visual stepper controls, ideal for quantity selection or limited-range numeric entry.',
        codeblock: {
          title: 'Add stepper controls and constraints',
          tabs: [
            {
              code: './examples/controls-constraints.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Configure the keyboard layout by specifying `inputMode` for decimal or numeric entry. This example shows how to use the `inputMode` property to display appropriate mobile keyboards—numeric for integers or decimal for numbers with fractional parts—improving data entry speed and accuracy.',
        codeblock: {
          title: 'Configure keyboard input modes',
          tabs: [
            {
              code: './examples/input-mode.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
