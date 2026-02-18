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
    codeblock: {
      title: 'Simple NumberField example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/NumberField/examples/basic-numberfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-numberfield.example.ts',
          language: 'js',
        },
      ],
    },
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
