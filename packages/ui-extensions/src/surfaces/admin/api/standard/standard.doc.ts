import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description: 'This API is available to all extension types.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: '',
      type: 'StandardApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
};

export default data;
