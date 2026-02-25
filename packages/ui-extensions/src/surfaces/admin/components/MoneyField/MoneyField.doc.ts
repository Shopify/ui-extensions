import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'MoneyField',
  description:
    'The MoneyField component provides a specialized numeric input for monetary values. It accepts a currency code, minimum and maximum constraints, and returns values as either a number or a `Money` object.\n\nFor plain numeric input without currency handling, use [NumberField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/numberfield).',
  requires: '',
  thumbnail: 'moneyfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the MoneyField component.',
      type: 'MoneyFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'moneyfield-default.png',
    description:
      'Set a cost-per-item price in USD and save it from an action modal. This example uses `MoneyField` with `currencyCode` set to USD, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the price and closes the modal.',
    codeblock: {
      title: 'Set product cost price',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/MoneyField/examples/basic-moneyfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-moneyfield.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Display multiple money fields with different `currencyCode` values for regional pricing. This example renders USD, EUR, and GBP price fields in a [BlockStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/blockstack), each automatically formatted with the correct currency symbol and decimal precision for their locale.',
        codeblock: {
          title: 'Configure regional currency pricing',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/MoneyField/examples/moneyfield-currencies.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/moneyfield-currencies.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          "Enforce minimum price constraints using `min` and the `error` prop for inline validation. This example prevents merchants from setting a wholesale price at zero or below, displaying an error until they've entered a valid amount.",
        codeblock: {
          title: 'Validate minimum price amount',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/MoneyField/examples/moneyfield-validation.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/moneyfield-validation.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use MoneyField instead of NumberField for prices:** MoneyField handles currency-specific formatting and provides the currency code alongside the amount, making it the right choice for any monetary input.
- **Narrow the onChange value type:** The \`onChange\` callback receives \`number | Money\`. When \`currencyCode\` is set, the value is a \`Money\` object with \`amount\` and \`currencyCode\` properties. Otherwise, it's a plain number. Use a type check (for example, \`typeof value === 'object'\`) to narrow the type before reading the value.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- MoneyField doesn't automatically format the displayed value with thousands separators or decimal places based on the currency. The raw numeric input is shown as entered.
- The currency code isn't visually displayed inside the field. If you want to show the currency symbol or code, you might need to use the label or a nearby [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) component.
- MoneyField supports a large set of ISO 4217 currency codes, but currency-specific rules (like the number of decimal places for JPY vs USD) aren't automatically enforced. You must validate decimal precision yourself.
- The \`min\` and \`max\` props define valid boundaries but don't prevent typing values outside the range. Validate in your \`onChange\` handler and set \`error\` accordingly.`,
    },
  ],
  related: [],
};

export default data;
