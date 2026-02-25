import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'The NumberField component provides a text input optimized for numeric values. Use this component to set minimum and maximum constraints, step increments, a suffix decoration, and virtual keyboard modes.\n\nUse [MoneyField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/moneyfield) for monetary values, and [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield) for general text.',
  requires: '',
  thumbnail: 'numberfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
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
  defaultExample: {
    image: 'numberfield-default.png',
    description:
      'Specify a restock quantity between 1 and 10,000. This example uses `NumberField` with `min` and `max` props to constrain the input, and a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that submits the restock and closes the modal.',
    codeblock: {
      title: 'Set inventory restock quantity',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/NumberField/examples/basic-numberfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-numberfield.example.ts',
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
          'Collect fractional values like cost pricing and profit margins from merchants. This example uses `inputMode="decimal"` and combines `step` with `suffix` to guide merchants through entering currency amounts and percentages with the correct precision.',
        codeblock: {
          title: 'Configure decimal pricing fields',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/NumberField/examples/numberfield-decimal.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/numberfield-decimal.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Enforce warehouse-specific limits using `min`, `max`, and `step` constraints with inline `error` feedback. This example validates slot numbers against a maximum capacity and shows an error when the value exceeds the allowed range.',
        codeblock: {
          title: 'Enforce numeric constraints with errors',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/NumberField/examples/numberfield-constraints.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/numberfield-constraints.example.ts',
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
      sectionContent: `- **Set \`min\`, \`max\`, and \`step\` for bounded values:** When the acceptable range is known (like quantities, percentages, or weights), set constraints to prevent invalid entries.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The \`min\` and \`max\` props define valid value boundaries but don't prevent merchants from typing values outside the range. You must validate the value in your \`onChange\` handler and set the \`error\` prop accordingly.
- NumberField returns a numeric value through \`onChange\`, not a string. Non-numeric input (like letters) isn't passed through to the callback.`,
    },
  ],
  related: [],
};

export default data;
