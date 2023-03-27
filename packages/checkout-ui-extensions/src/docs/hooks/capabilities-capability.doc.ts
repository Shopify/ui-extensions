import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionCapability',
  description:
    'Returns whether or not a given capability of an extension is granted.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metadata',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionCapabilityGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
