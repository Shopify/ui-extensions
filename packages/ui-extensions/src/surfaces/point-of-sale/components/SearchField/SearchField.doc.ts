import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'SearchField',
  description:
    'Use `s-search-field` to provide search functionality within your application. Includes built-in search styling and behavior optimized for filtering content.',
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
      description: '',
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
          language: 'HTML',
        },
      ],
    },
  },
  related: [],
};

export default data;
