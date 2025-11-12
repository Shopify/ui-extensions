import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'SearchField',
  description: 'Capture search terms using a single-line input field.',
  thumbnail: 'search-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SearchField',
    },
    {
      title: 'Events',
      description:
        'Learn more about registering [events](/docs/api/pos-ui-extensions/using-polaris-components#events)',
      type: 'SearchFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'search-field-default.png',
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
    description: 'SearchField usage patterns',
    examples: [
      {
        description: 'Handle search input events',
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
