import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Note',
  description: 'The API for interacting with the note applied to checkout.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_NoteApi',
    },
    {
      title: 'useNote',
      description: 'Returns the proposed `note` applied to the checkout.',
      type: 'UseNoteGeneratedType',
    },
  ],
  related: [],
};

export default data;
