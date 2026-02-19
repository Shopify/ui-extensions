import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'The TextField component provides a single-line text input for collecting short-form text from merchants, such as names, titles, or search queries. It supports labels, placeholder text, validation errors, read-only and disabled states, autocomplete hints, and a suffix decoration.\n\nFor multi-line input, use [TextArea](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textarea). For specialized input types, use [EmailField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/emailfield), [URLField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/urlfield), [NumberField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/numberfield), or [PasswordField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/passwordfield).',
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
    codeblock: {
      title: 'Simple TextField example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/TextField/examples/basic-textfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-textfield.example.ts',
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
