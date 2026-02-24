import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Select',
  description:
    'The Select component provides a dropdown menu for choosing a single value from a predefined list of options. It supports option groups, placeholder text, disabled and read-only states, and inline validation errors.\n\nFor visible radio/checkbox lists, use [ChoiceList](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/choicelist).',
  requires: '',
  thumbnail: 'select-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Select component.',
      type: 'SelectProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'select-default.png',
    description:
      'Assign a product to a warehouse location from a dropdown of four regions. This example uses `Select` with four warehouse options, and a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that assigns the warehouse and closes the modal.',
    codeblock: {
      title: 'Assign warehouse location',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Select/examples/basic-select.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-select.example.ts',
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
          'Guide merchants to make a selection by adding a `placeholder` that appears before any option is chosen. This example uses a placeholder message in a product classification dropdown, making it clear that a selection is expected.',
        codeblock: {
          title: 'Add placeholder prompt text',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Select/examples/select-placeholder.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/select-placeholder.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Validate that a `required` select field has a value before submission using the `error` prop. This example shows an inline error when merchants attempt to save without choosing a shipping class, preventing incomplete data from reaching your backend.',
        codeblock: {
          title: 'Validate required selection on submit',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Select/examples/select-error.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/select-error.example.ts',
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
      sectionContent: `- **Use Select for four or more options:** When there are only two or three options, use a [ChoiceList](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/choicelist) with radio buttons instead because all options are visible without interaction.
- **Order options logically:** Arrange options in an order that makes sense to merchants, such as alphabetically, by popularity, or by a natural sequence. Place the most common choice first when there's no inherent order.
- **Use option groups for long lists:** When the list has many options, group related items using option groups to make scanning easier.
- **Write a clear label:** The required \`label\` prop describes what the selection controls. Use specific labels like "Country" or "Sort by".
- **Use a placeholder when no default makes sense:** Set the \`placeholder\` prop (like "Select a country") when there's no obvious default value. This communicates that the merchant needs to make a choice.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Select supports single selection only. For multi-selection, use a [ChoiceList](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/choicelist) with \`multiple\` set to \`true\`.
- The dropdown options can't be customized with colors, icons, or rich content.
- Select doesn't support search or filtering within the options list. For large option sets, use option groups to help merchants find items faster.
- Dynamic loading of options as the user scrolls isn't supported.`,
    },
  ],
  related: [],
};

export default data;
