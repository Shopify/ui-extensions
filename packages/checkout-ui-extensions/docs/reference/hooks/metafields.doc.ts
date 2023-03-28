import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useMetafields',
  description:
    'Returns the current array of `metafields` applied to the checkout. You can optionally filter the list.',
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
