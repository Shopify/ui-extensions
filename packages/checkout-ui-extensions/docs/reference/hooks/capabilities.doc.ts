import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionCapabilities',
  description: "Returns a list of an extension's granted capabilities.",
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metadata',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionCapabilitiesGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
