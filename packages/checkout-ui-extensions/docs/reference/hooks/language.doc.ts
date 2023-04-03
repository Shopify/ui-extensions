import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useLanguage',
  description:
    'Returns the current language of the checkout, and automatically re-renders your component if the language changes.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Localization',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseLanguageGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
