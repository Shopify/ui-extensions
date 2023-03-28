import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyMetafieldsChange',
  description:
    'Returns a function to mutate the `metafields` property of the checkout.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metafields',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseApplyMetafieldsChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
