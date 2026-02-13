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
      sectionContent: `- **Use for numeric-only input:** Choose the component when you need strictly numeric values like quantities, measurements, or percentages. For values that might contain letters or symbols (like product codes or phone numbers), use [TextField](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/textfield) instead.
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
        'Configure the following properties on the NumberField component.',
      type: 'NumberField',
    },
    {
      title: 'Events',
      description:
        'The NumberField component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'NumberFieldEvents',
    },
  ],
  defaultExample: {
    image: 'numberfield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a simple number field for entering order quantity with a predefined range and step value.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a number field for entering product prices with currency prefix and suffix, using decimal input mode.',
            codeblock: {
              title: 'With prefix and suffix',
              tabs: [
                {
                  code: './examples/with-prefix-and-suffix.html',
                  language: 'html',
                },

                {
                  code: './examples/with-prefix-and-suffix.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases multiple number fields for different use cases: inventory tracking, percentage discount, and shipping weight, demonstrating various input modes and configurations.',
            codeblock: {
              title: 'Multiple examples',
              tabs: [
                {
                  code: './examples/multiple-examples.html',
                  language: 'html',
                },

                {
                  code: './examples/multiple-examples.jsx',
                  language: 'preview-jsx',
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
