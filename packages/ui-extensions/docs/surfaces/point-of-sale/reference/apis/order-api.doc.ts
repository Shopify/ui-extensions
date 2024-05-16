import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description:
    'The Order API provides an extension with data about the current order.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'OrderApi',
      description: '',
      type: 'OrderAPIContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
