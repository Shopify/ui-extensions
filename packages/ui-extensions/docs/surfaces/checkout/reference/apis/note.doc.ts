import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Note',
  description: 'The API for interacting with the note applied to checkout.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_NoteApi',
    },
    {
      title: 'useNote',
      description: 'Returns the proposed `note` applied to the checkout.',
      type: 'UseNoteGeneratedType',
    },
    {
      title: 'CheckoutApi',
      description: CHECKOUT_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Checkout_NoteApi',
    },
    {
      title: 'useApplyNoteChange',
      description:
        'Returns a function to mutate the `note` property of the checkout.',
      type: 'UseApplyNoteChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
