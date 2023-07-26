import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtension',
  description: '',
  descriptionType: 'UseExtensionGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metadata',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
