import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionLanguage',
  description: '',
  descriptionType: 'UseExtensionLanguageGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Localization',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionLanguageGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
