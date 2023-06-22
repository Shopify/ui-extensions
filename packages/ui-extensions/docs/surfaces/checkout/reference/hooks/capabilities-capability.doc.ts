import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionCapability',
  description: '',
  descriptionType: 'UseExtensionCapabilityGeneratedType',
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
