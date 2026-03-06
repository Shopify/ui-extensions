import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Choice list',
  description:
    'The choice list component presents multiple options for single or multiple selections. Use it when merchants need to choose from a defined set of options, such as filtering results or collecting preferences.' +
    '\n\nThe component supports both single selection (radio button behavior) and multiple selection (checkbox behavior) modes. It offers multiple layout variants including list, inline, block, and grid formats to suit different space constraints and visual requirements.',
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the choice list component.',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description:
        'The choice list component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'ChoiceListEvents',
    },
    {
      title: 'Choice',
      description:
        'The choice component creates options that let merchants select one or multiple items from a list of choices.',
      type: 'Choice',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    description:
      'Present options using a choice list component. This example shows a basic choice list for single selection.',
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
Choice list component types other than choice can't be used as options within the choice list.`,
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
      {
        description:
          'Compose rich choice content by nesting other components within choice elements. This example demonstrates combining images, text, and layout components to create visually enhanced choice options with descriptions and supporting images.',
        codeblock: {
          title: 'Compose rich choice content',
          tabs: [
            {
              code: './examples/composed-choices.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
