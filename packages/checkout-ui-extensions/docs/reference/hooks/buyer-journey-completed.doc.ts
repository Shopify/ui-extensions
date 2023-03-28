import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useBuyerJourneyCompleted',
  description: `
Returns true if the buyer completed submitting their order.

For example, when viewing the order status page after submitting payment, the buyer will have completed their order.
`,
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Buyer Journey',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseBuyerJourneyCompletedGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
