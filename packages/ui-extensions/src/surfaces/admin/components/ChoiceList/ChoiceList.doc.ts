import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'The ChoiceList component groups a set of related options as either radio buttons (single selection) or checkboxes (multiple selection). Use it when merchants need to choose from a visible set of options.\n\nFor dropdown selection that takes less vertical space, use [Select](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/select).',
  requires: '',
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the ChoiceList component.',
      type: 'ChoiceListProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    description:
      'Pick a shipping speed from standard, express, and overnight radio options. This example renders a `ChoiceList` with three tiers as radio buttons, and a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the selected method.',
    codeblock: {
      title: 'Choose a shipping method',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ChoiceList/examples/basic-choicelist.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-choicelist.example.ts',
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
          'Enable multi-select with the `multiple` prop to let merchants pick several options at once. This example renders checkboxes for product tags like "Seasonal" and "Best seller", collecting an array of selected values to save as product metadata.',
        codeblock: {
          title: 'Select multiple product tags',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ChoiceList/examples/choicelist-multiple.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/choicelist-multiple.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Validate that a selection has been made before submission using the `error` prop. This example shows an inline error when merchants attempt to save without selecting a compliance region, so a region is always chosen before the data reaches your backend.',
        codeblock: {
          title: 'Validate required selection',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ChoiceList/examples/choicelist-error.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/choicelist-error.example.ts',
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
      sectionContent: `- **Keep the list short and scannable:** Display 2-6 options. For longer lists, consider using a [Select](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/select) dropdown instead, which takes up less vertical space.
- **Write clear, parallel labels:** Each choice label should be written in a consistent format. For example, all labels should start with a verb or all should be noun phrases.
- **Provide a default selection for radio buttons:** When using single selection, pre-select the most common or recommended option so merchants don't have to make a choice when the default works.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- ChoiceList doesn't support nested or hierarchical choices. All options are presented at the same level.
- Individual choices within the list can be disabled or set to read-only, but the visual distinction between disabled and read-only choices is subtle.
- The \`choices\` prop requires each choice to have a \`label\` and optionally supports \`disabled\`, \`id\`, \`readOnly\`, \`error\`, and \`checked\`. Rich content like descriptions or images inside choices isn't supported.
- When \`multiple\` is \`true\`, the \`onChange\` callback returns an array of selected values. When \`false\`, it returns a single string value. Your handler must account for both shapes.`,
    },
  ],
  related: [],
};

export default data;
