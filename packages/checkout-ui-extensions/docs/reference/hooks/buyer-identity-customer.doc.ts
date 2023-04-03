import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag, REQUIRES_PROTECTED_CUSTOMER_DATA} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useCustomer',
  description: `
Returns the account belonging to the customer.

The value is a \`Customer\` if the customer has an account and is logged in, \`undefined\` otherwise.
`,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Buyer Identity',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseCustomerGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
