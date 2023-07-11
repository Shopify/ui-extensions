import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useMetafield',
  description: '',
  descriptionType: 'UseMetafieldGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metafields',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseMetafieldGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
