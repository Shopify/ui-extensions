import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/NumberField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/numberfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for numeric-only input:** Choose the component when you need strictly numeric values like quantities, measurements, or percentages. For values that might contain letters or symbols (like product codes or phone numbers), use [text field](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/text-field) instead.
- **Provide context with units:** Display units of measurement using prefix or suffix to clarify what the number represents. Without context, merchants might not know if they're entering dollars, kilograms, or percentages.
- **Set realistic constraints:** Define minimum and maximum values that reflect actual business rules. This guides merchants toward valid inputs and prevents unrealistic values before form submission.
- **Validate and provide clear feedback:** Always validate numeric input and show specific error messages that explain what went wrong and how to fix it. Generic error messages don't help merchants understand what value to enter.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Setting \`inputMode\` suggests a keyboard layout on mobile but doesn't prevent merchants from entering non-numeric characters. Always validate input values in your \`change\` event handler.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the number field component.',
      type: 'NumberField',
    },
    {
      title: 'Events',
      description:
        'The number field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'NumberFieldEvents',
    },
  ],
  defaultExample: {
    image: 'numberfield-default.png',
    description:
      'Collect a numeric value from merchants with step controls and a defined range. This example shows a number field with a label, placeholder, step increment, and min/max bounds.',
    codeblock: {
      title: 'Add a basic number field',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Add a prefix and suffix to provide context for the expected value, such as a currency symbol or unit. This example shows a price field with a dollar sign prefix, currency suffix, and decimal input mode.',
            codeblock: {
              title: 'Add a prefix and suffix for currency input',
              tabs: [
                {
                  code: './examples/with-prefix-and-suffix.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display an error message when a value is outside the accepted range or a required field is empty. This example shows a required number field with an error indicating the minimum allowed value.',
            codeblock: {
              title: 'Show a validation error',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Prevent editing by making a number field read-only or fully disabled. This example shows a read-only price field and a disabled tax rate field, both with pre-filled values.',
            codeblock: {
              title: 'Disable or make a number field read-only',
              tabs: [
                {
                  code: './examples/disabled-and-read-only.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
