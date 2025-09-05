import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'Triggers actions or events, such as opening dialogs or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface.',
  thumbnail: 'button-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Button',
    },
    {
      title: 'Events',
      description: '',
      type: 'ButtonEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'button-default.png',
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
