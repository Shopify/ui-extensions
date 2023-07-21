import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useCheckoutSettings',
  description: '',
  descriptionType: 'UseCheckoutSettingsGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metadata',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseCheckoutSettingsGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
