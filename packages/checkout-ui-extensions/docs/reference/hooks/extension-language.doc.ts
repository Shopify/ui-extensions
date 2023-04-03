import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionLanguage',
  description: "Returns the buyer's language, as supported by the extension.",
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
