import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTranslate',
  description: '',
  descriptionType: 'UseTranslateGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Localization',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTranslateGeneratedType',
    },
  ],
  defaultExample: getHookExample('translate'),
  examples: {
    description: '',
    examples: [getHookExample('translate-pluralization')],
  },
  related: getLinksByTag('apis'),
};

export default data;
