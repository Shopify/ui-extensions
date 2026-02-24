import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'The TextField component provides a single-line text input for collecting short-form text from merchants, such as names, titles, or search queries. It supports labels, placeholder text, validation errors, read-only and disabled states, and autocomplete hints.\n\nFor multi-line input, use [TextArea](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textarea). For specialized input types, use [EmailField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/emailfield), [URLField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/urlfield), [NumberField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/numberfield), or [PasswordField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/passwordfield).',
  requires: '',
  thumbnail: 'textfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the TextField component.',
      type: 'TextFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'textfield-default.png',
    description:
      'Tag a product with a custom warehouse label and save it from an action modal. This example uses `TextField` to capture the value, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the label.',
    codeblock: {
      title: 'Collect product metadata',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/TextField/examples/basic-textfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-textfield.example.ts',
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
          'Validate SKU format on each keystroke using the `error` prop and `onChange` callback. This example checks minimum length and character restrictions as the merchant types, displaying inline error messages that prevent invalid data from being submitted.',
        codeblock: {
          title: 'Validate input with error messages',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/TextField/examples/textfield-validation.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/textfield-validation.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Set a field to read-only with `readOnly` and guide input with `placeholder` text. This example locks a store handle field so merchants can view but not edit it, and uses a placeholder on the weight field to suggest the expected format.',
        codeblock: {
          title: 'Configure read-only and placeholder fields',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/TextField/examples/textfield-readonly.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/textfield-readonly.example.ts',
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
      sectionContent: `- **Write a clear label:** The required \`label\` prop tells merchants and screen reader users what information the field expects. Use specific, concise labels like "Product title" or "Order note".
- **Use placeholder text as a hint, not a label:** Placeholders disappear when the merchant starts typing, so use them for formatting hints (like "Summer Sale") rather than as a replacement for the label.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The \`minLength\` and \`maxLength\` props constrain input length but don't display a character counter. If merchants need to see remaining characters, you must implement a counter separately.
- TextField doesn't support input masking or formatting (such as phone number patterns).`,
    },
  ],
  related: [],
};

export default data;
