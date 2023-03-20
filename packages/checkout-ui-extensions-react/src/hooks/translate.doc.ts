import type {
  ReferenceEntityTemplateSchema,
  ExampleType,
} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTranslate',
  description:
    'Returns the `I18nTranslate` interface used to translate strings.',
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
  defaultExample: getHookExample('translate', __dirname),
  examples: {
    description: '',
    examples: [
      getHookExample('translate-pluralization', __dirname) as ExampleType,
    ],
  },
  related: getLinksByTag('localization', 'UseTranslateGeneratedType'),
};

export default data;
