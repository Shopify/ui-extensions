import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description: 'Present multiple options for single or multiple selections.',
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description:
        'Learn more about registering [events](/docs/api/pos-ui-extensions/using-polaris-components#events)',
      type: 'ChoiceListEvents',
    },
    {
      title: 'Choice',
      description:
        'Creates options that let merchants select one or multiple items from a list of choices.',
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
