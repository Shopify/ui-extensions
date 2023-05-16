import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useBuyerJourneyCompleted',
  description: '',
  descriptionType: 'UseBuyerJourneyCompletedGeneratedType',
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
