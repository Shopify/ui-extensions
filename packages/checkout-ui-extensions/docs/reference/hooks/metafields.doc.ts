import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useMetafields',
  description: '',
  descriptionType: 'UseMetafieldsGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metafields',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseMetafieldsGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
