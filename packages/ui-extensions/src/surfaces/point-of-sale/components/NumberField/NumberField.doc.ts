import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description: 'Capture numeric input with built-in validation.',
  thumbnail: 'number-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberField',
    },
    {
      title: 'Slots',
      description:
        'Learn more about using [slots](/docs/api/pos-ui-extensions/using-polaris-components#slots)',
      type: 'NumberFieldSlots',
    },
    {
      title: 'Events',
      description:
        'Learn more about registering [events](/docs/api/pos-ui-extensions/using-polaris-components#events)',
      type: 'NumberFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'number-field-default.png',
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
    description: 'NumberField usage patterns',
    examples: [
      {
        description:
          'Use controls for increment/decrement buttons and set min/max constraints',
        codeblock: {
          title: 'Controls and constraints',
          tabs: [
            {
              code: './examples/controls-constraints.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Specify inputMode for decimal or numeric keyboard layouts',
        codeblock: {
          title: 'Input modes',
          tabs: [
            {
              code: './examples/input-mode.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
