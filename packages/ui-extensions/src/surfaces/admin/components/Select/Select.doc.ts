import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Select',
  description:
    'The Select component provides a dropdown menu for choosing a single value from a predefined list of options. It supports option groups, placeholder text, disabled and read-only states, and inline validation errors.',
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
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Select/examples/basic-Select.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Select.example.ts',
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
      sectionContent: `- **Use Select for 4 or more options:** When there are only two or three options, consider using individual [Checkbox](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/checkbox) components instead, since all options are visible without interaction.
- **Order options logically:** Arrange options in an order that makes sense to merchants, such as alphabetically, by popularity, or by a natural sequence. Place the most common choice first when there's no inherent order.
- **Use option groups for long lists:** When the list has many options, group related items using option groups to make scanning easier.
- **Write a clear label:** The required \`label\` prop describes what the selection controls. Use specific labels like "Country" or "Sort by".
- **Use a placeholder when no default makes sense:** Set the \`placeholder\` prop (like "Select a country") when there's no obvious default value. This communicates that the merchant needs to make a choice.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Select supports single selection only.
- The dropdown options are rendered natively by the browser, so their appearance can't be customized with colors, icons, or rich content.
- Select doesn't support search or filtering within the options list. For large lists that need search, consider a custom autocomplete pattern.
- Options must be provided as a flat list or grouped list at render time. Dynamic loading of options as the user scrolls isn't supported.`,
    },
  ],
};

export default data;
