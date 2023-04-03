import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useStorage',
  description:
    'Returns the key-value `Storage` interface for the extension point.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Storage',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseStorageGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
