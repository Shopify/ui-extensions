import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag, REQUIRES_PROTECTED_CUSTOMER_DATA} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useEmail',
  description:
    "Returns the customer's email address if they are logged in, otherwise `undefined`.",
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Buyer Identity',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseEmailGeneratedType',
    },
  ],
  related: getLinksByTag('buyer-identity', 'UseEmailGeneratedType'),
};

export default data;
