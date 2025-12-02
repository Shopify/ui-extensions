import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'The `ChoiceList` component presents multiple options for single or multiple selections. Use it when merchants need to choose from a defined set of options in forms or filtering interfaces.' +
    "\n\nThe component supports both single and multiple selection modes with clear visual indicators for selected states and proper checkbox or radio button semantics, although the actual appearance may vary based on the POS platform and screen size. It includes features like select all/none functionality for multiple selection across various configuration and filtering scenarios. Note that `ChoiceList` doesn't automatically filter or update content based on selections. You must implement the logic to respond to selection changes." +
    '\n\n`ChoiceList` components maintain selection state across navigation and form resets, with proper visual indication of indeterminate states when some but not all options in a group are selected.' +
    "Within `ChoiceList`, use only Choice components as children.",
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `ChoiceList` component.',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description:
        'The `ChoiceList` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ChoiceListEvents',
    },
    {
      title: 'Choice',
      description:
        'The `Choice` component creates options that let merchants select one or multiple items from a list of choices.',
      type: 'Choice',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    description:
      'Present multiple options for single or multiple selections using a `ChoiceList` component. This example shows a basic choice list with radio button semantics for single selection.',
    codeblock: {
      title: 'Create a choice list for selections',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose appropriate selection modes:** Use single selection for mutually exclusive options. Enable \`multiple\` when merchants can select more than one.
- **Write clear, concise choice labels:** Keep labels short but descriptive enough that merchants understand each option without additional explanation.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`ChoiceList\` component types other than Choice can't be used as options within the choice list.`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to enable multiple selection modes and handle selection events.',
    examples: [
      {
        description:
          'Enable multiple selection mode to allow merchants to select multiple options from the list. This example demonstrates using controlled values with the `multiple` property, perfect for filtering interfaces or collecting multiple preferences in forms.',
        codeblock: {
          title: 'Enable multiple selection mode',
          tabs: [
            {
              code: './examples/multiple-selection.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Subscribe to `onChange` and `onInput` events to respond when merchants select options. This example shows how to handle selection changes and capture user input in real time, enabling dynamic behavior and form validation based on merchant choices.',
        codeblock: {
          title: 'Handle selection events',
          tabs: [
            {
              code: './examples/event-handling.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
