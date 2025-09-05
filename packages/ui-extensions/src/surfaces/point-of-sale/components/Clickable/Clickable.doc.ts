import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Clickable',
  description:
    'Use Clickable to make any content interactive and accessible. Provides consistent click behavior.',
  thumbnail: 'selectable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Clickable',
    },
    {
      title: 'Events',
      description: '',
      type: 'ClickableEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'selectable-default.png',
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
};

export default data;
