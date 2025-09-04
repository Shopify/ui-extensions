import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    "Use `s-badge` to inform merchants of the status of an item or action that's been taken. Badges display text with visual styling to communicate status information.",
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Badge',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'badge-default.png',
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
