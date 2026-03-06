import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Number field',
  description:
    'The number field component captures numeric input with built-in number validation. Use it to collect quantities, prices, or other numeric information.' +
    '\n\nThe component supports optional stepper controls, min/max constraints, and step increments for guided numeric entry.',
  thumbnail: 'number-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the number field component.',
      type: 'NumberField',
    },
    {
      title: 'Slots',
      description:
        'The number field component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/app-ui/using-polaris-web-components#slots).',
      type: 'NumberFieldSlots',
    },
    {
      title: 'Events',
      description:
        'The number field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'NumberFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'number-field-default.png',
    description:
      'Capture numeric input using a number field component. This example shows a basic number field with a label for collecting numeric values.',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose appropriate controls:** Use \`stepper\` for quantities or small adjustments. Use \`none\` for prices or large values where steppers are impractical.
- **Select the right input mode:** Use \`decimal\` for prices and measurements. Use \`numeric\` for quantities and counts.
- **Explain constraints in details:** Use \`details\` to clarify valid ranges or formatting, like "Enter a quantity between 1 and 999."
`,
    },
  ],
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
