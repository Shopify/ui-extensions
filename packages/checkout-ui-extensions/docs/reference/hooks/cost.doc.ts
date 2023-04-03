import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTotalAmount',
  description:
    'Returns a `Money` value representing the minimum a buyer can expect to pay at the current step of checkout. This value excludes amounts yet to be negotiated. For example, the information step might not have delivery costs calculated.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTotalAmountGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
