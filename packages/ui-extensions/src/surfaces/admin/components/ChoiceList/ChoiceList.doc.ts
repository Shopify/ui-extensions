import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'The `ChoiceList` component groups a set of related options as either radio buttons (single selection) or checkboxes (multiple selection). Use it when merchants need to choose from a visible set of options.\n\nFor dropdown selection that takes less vertical space, use [`Select`](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/select).',
  requires: '',
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `ChoiceList` component.',
      type: 'ChoiceListProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    codeblock: {
      title: 'Simple ChoiceList example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ChoiceList/examples/basic-ChoiceList.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-ChoiceList.example.ts',
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
      sectionContent: `- **Use radio buttons for mutually exclusive options:** When only one choice is allowed, leave \`multiple\` unset or set it to \`false\`. \`ChoiceList\` renders radio buttons by default.
- **Use checkboxes for multiple selections:** Set \`multiple\` to \`true\` when merchants can select more than one option. \`ChoiceList\` renders checkboxes in this mode.
- **Keep the list short and scannable:** Display 2-6 options. For longer lists, consider using a [\`Select\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/select) dropdown instead, which takes up less vertical space.
- **Write clear, parallel labels:** Each choice label should be written in a consistent format. For example, all labels should start with a verb or all should be noun phrases.
- **Provide a default selection for radio buttons:** When using single selection, pre-select the most common or recommended option so merchants don't have to make a choice when the default works.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- \`ChoiceList\` doesn't support nested or hierarchical choices. All options are presented at the same level.
- Individual choices within the list can be disabled or set to read-only, but the visual distinction between disabled and read-only choices is subtle.
- The \`choices\` prop requires each choice to have a \`label\` and optionally supports \`disabled\`, \`id\`, \`readOnly\`, \`error\`, and \`checked\`. Rich content like descriptions or images inside choices isn't supported.
- When \`multiple\` is \`true\`, the \`onChange\` callback returns an array of selected values. When \`false\`, it returns a single string value. Your handler must account for both shapes.`,
    },
  ],
  related: [],
};

export default data;
