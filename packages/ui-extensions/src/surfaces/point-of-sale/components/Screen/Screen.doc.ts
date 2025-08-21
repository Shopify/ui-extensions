import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Screen',
  description:
    'Use `s-screen` to create full-screen layouts and navigation containers. Provides the foundation for organizing content and managing navigation flows.',
  thumbnail: 'screen-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Screen',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ScreenSlots',
    },
    {
      title: 'Events',
      description: '',
      type: 'ScreenEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'screen-default.png',
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
