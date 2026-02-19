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
  related: [],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'Simple Select example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Select/examples/basic-select.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-select.example.ts',
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
};

export default data;
