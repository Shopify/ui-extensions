import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Clickable',
  description:
    'Use `s-clickable` to make any content interactive and accessible. Provides consistent click behavior and keyboard navigation support.',
  thumbnail: 'clickable-thumbnail.png',
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
    image: 'clickable-default.png',
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
