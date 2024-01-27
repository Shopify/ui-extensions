import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart API',
  description:
    'The Cart API enables UI Extensions to manage and interact with POS cart contents, such as discounts, line items, and customer details. It provides a comprehensive set of functions for adding and removing items, alongside a subscribable object that keeps the UI Extension updated with real-time changes to the cart.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartApi',
      description: '',
      type: 'CartApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
