import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/MoneyField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/moneyfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Set realistic min/max constraints:** For product prices, use \`min={0.01}\` to prevent zero prices. For discounts, use \`min={0}\` and \`max={orderTotal}\`. For refunds, use \`max={amountPaid}\`. Always validate against business logic limits.
- **Provide specific validation feedback:** Instead of **Invalid amount**, show **Price must be at least $0.01** or **Discount can't exceed $50.00 order total**. Explain the exact constraint violated.
- **Never add currency symbols to labels:** \`MoneyField\` automatically adds currency symbols. Never add **$** or other symbols to the label or placeholder. This creates confusion.
- **Label by specific monetary purpose:** Use labels like **Product base price**, **Discount amount**, **Shipping rate per kg**, or **Subscription renewal fee** instead of vague **Amount** or **Price**.
- **Pre-fill when editing existing values:** Always populate the field with the current value when editing. For new entries, consider smart defaults like **0.00** or typical price points for your product category.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component stores values as JavaScript numbers (64-bit floating point), which can cause precision errors in decimal arithmetic. Always perform critical financial calculations on the server using decimal-precise arithmetic or integer cents (multiply by 100).
- The component formats currency based on the merchant's store currency and locale. The same numeric value might display as **$1,234.56** (en-US) vs **1 234,56 $** (fr-FR). Test your UI with various currency/locale combinations if you operate internationally.
- Currencies like JPY (¥), KRW (₩), and VND (₫) don't use decimal places. The component might still allow decimal input but this will be invalid for these currencies. Validate the currency's decimal places on the backend and adjust the \`step\` property accordingly.
- The component doesn't perform currency conversion. If you need to display amounts in multiple currencies, you must handle conversion rates and calculations separately.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `MoneyField` component.',
      type: 'MoneyField',
    },
    {
      title: 'Events',
      description:
        'The `MoneyField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'MoneyFieldEvents',
    },
  ],
  defaultExample: {
    image: 'moneyfield-default.png',
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
              'Demonstrates a simple money field with a label, initial value, and numeric constraints.',
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
              'Showcases a money field with explicit minimum and maximum value limits, and a detailed description for user guidance.',
            codeblock: {
              title: 'With validation limits',
              tabs: [
                {
                  code: './examples/with-validation-limits.html',
                  language: 'html',
                },

                {
                  code: './examples/with-validation-limits.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a money field demonstrating basic error handling and validation.',
            codeblock: {
              title: 'Basic field',
              tabs: [
                {
                  code: './examples/basic-field.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-field.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Displays multiple money fields in a vertical stack, showing how to integrate multiple currency inputs in a form with varied details and constraints.',
            codeblock: {
              title: 'Currency formatting with form integration',
              tabs: [
                {
                  code: './examples/currency-formatting-with-form-integration.html',
                  language: 'html',
                },

                {
                  code: './examples/currency-formatting-with-form-integration.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Form validation',
        examples: [
          {
            description:
              'Interactive example showing real-time validation with min/max limits and dynamic error messages.',
            codeblock: {
              title: 'Money field validation',
              tabs: [
                {
                  code: './examples/validation-example.jsx',
                  language: 'preview-jsx',
                  layout: 'formWrapper',
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
