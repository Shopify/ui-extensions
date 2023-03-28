import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useBuyerJourney',
  description:
    'Returns the `buyerJourney` details on buyer progression in checkout.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Buyer Journey',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseBuyerJourneyGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
