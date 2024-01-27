import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigation API',
  description:
    'The Navigation API enables POS UI extension to navigate between screens.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'NavigationApi',
      description: '',
      type: 'NavigationApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
