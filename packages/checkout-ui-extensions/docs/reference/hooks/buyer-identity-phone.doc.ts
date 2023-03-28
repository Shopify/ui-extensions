import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag, REQUIRES_PROTECTED_CUSTOMER_DATA} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'usePhone',
  description:
    "Returns the customer's phone number if they are logged in, otherwise `undefined`.",
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Buyer Identity',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UsePhoneGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
