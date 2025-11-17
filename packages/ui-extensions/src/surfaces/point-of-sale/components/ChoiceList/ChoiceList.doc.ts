import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'The `ChoiceList` component presents multiple options for single or multiple selections. Use it when merchants need to choose from a defined set of options in forms or filtering interfaces.' +
    '\n\nThe component supports both single and multiple selection modes with clear visual indicators for selected states and proper checkbox or radio button semantics. It includes features like select all/none functionality for multiple selection across various configuration and filtering scenarios.' +
    '\n\n`ChoiceList` components maintain selection state across navigation and form resets, with proper visual indication of indeterminate states when some but not all options in a group are selected.',
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
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
  examples: {
    description: 'ChoiceList usage patterns',
    examples: [
      {
        description: 'Enable multiple selection mode with controlled values',
        codeblock: {
          title: 'Multiple selection',
          tabs: [
            {
              code: './examples/multiple-selection.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description: 'Handle onChange and onInput events.',
        codeblock: {
          title: 'Event handling',
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
