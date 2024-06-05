import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Localization',
  description: 'The API for localizing your extension.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_LocalizationApi',
    },
    {
      title: 'useLanguage',
      description:
        "Returns the buyer's language, as supported by the extension. If the buyer's actual language is not supported by the extension, it will return the fallback locale used for translations.",
      type: 'UseLanguageGeneratedType',
    },
    {
      title: 'useExtensionLanguage',
      description:
        'Returns the language the buyer sees in the customer account hub.',
      type: 'UseExtensionLanguageGeneratedType',
    },
    {
      title: 'useI18n',
      description:
        'Returns utilities for translating content and formatting values according to the current localization of the user.',
      type: 'UseI18nGeneratedType',
    },
    {
      title: 'useTranslate',
      description:
        'Returns the `I18nTranslate` interface used to translate strings.',
      type: 'UseTranslateGeneratedType',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Translating strings',
      tabs: [
        {
          code: '../examples/apis/translate.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/translate.example.ts',
          language: 'js',
          title: 'JavaScript',
        },
        {
          code: '../examples/apis/translate.locale.example.json',
          language: 'json',
          title: 'locales/en.default.json',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'You can use the count option to get a pluralized string based on the current locale.',
        codeblock: {
          title: 'Translating strings with pluralization',
          tabs: [
            {
              code: '../examples/apis/translate-pluralization.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/translate-pluralization.example.ts',
              language: 'js',
              title: 'JavaScript',
            },
            {
              code: '../examples/apis/translate-pluralization.locale.example.json',
              language: 'json',
              title: 'locales/en.default.json',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
