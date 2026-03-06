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
- **Never add currency symbols to labels:** Don't add **$** or other currency symbols to the label or placeholder, as this can create confusion with any currency formatting the component provides.
- **Label by specific monetary purpose:** Use labels like **Product base price**, **Discount amount**, **Shipping rate per kg**, or **Subscription renewal fee** instead of vague **Amount** or **Price**.
- **Pre-fill when editing existing values:** Always populate the field with the current value when editing. For new entries, consider smart defaults like **0.00** or typical price points for your product category.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component outputs values as strings, but converting to JavaScript numbers for arithmetic can cause floating-point precision errors. Always perform critical financial calculations on the server using decimal-precise arithmetic or integer cents (multiply by 100).
- The component formats currency based on the merchant's store currency and locale. The same numeric value might display as **$1,234.56** (en-US) vs **1 234,56 $** (fr-FR). Test your UI with various currency/locale combinations if you operate internationally.
- Currencies like JPY (¥), KRW (₩), and VND (₫) don't use decimal places. The component might still allow decimal input but this will be invalid for these currencies. Validate the currency's decimal places on the backend.
- The component doesn't perform currency conversion. If you need to display amounts in multiple currencies, you must handle conversion rates and calculations separately.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the money field component.',
      type: 'MoneyField',
    },
    {
      title: 'Events',
      description:
        'The money field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'MoneyFieldEvents',
    },
  ],
  defaultExample: {
    description:
      'Capture monetary values with automatic currency formatting. This example pairs a label with placeholder text and helper details.',
    codeblock: {
      title: 'Collect a currency value',
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
              'Set input boundaries for valid amounts. This example configures min/max limits to constrain the accepted value range.',
            codeblock: {
              title: 'Add a label and constraints',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Communicate input problems clearly to users. This example displays an error message when the entered value is invalid.',
            codeblock: {
              title: 'Handle validation errors',
              tabs: [
                {
                  code: './examples/basic-field.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Collect multiple monetary values in a single form. This example groups money fields for price, compare-at price, and cost with individual constraints.',
            codeblock: {
              title: 'Combine multiple fields in a form',
              tabs: [
                {
                  code: './examples/currency-formatting-with-form-integration.html',
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
