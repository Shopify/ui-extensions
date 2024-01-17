import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Localization',
  description: 'The APIs for localizing your extension.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_LocalizationApi',
    },
    {
      title: 'useCurrency',
      description: 'Returns the currency of the checkout.',
      type: 'UseCurrencyGeneratedType',
    },
    {
      title: 'useExtensionLanguage',
      description:
        "Returns the buyer's language, as supported by the extension.",
      type: 'UseExtensionLanguageGeneratedType',
    },
    {
      title: 'useLanguage',
      description:
        'Returns the current language of the checkout, and automatically re-renders your component if the language changes.',
      type: 'UseLanguageGeneratedType',
    },
    {
      title: 'useLocalizationCountry',
      description:
        'Returns the country of the checkout, and automatically re-renders your component if the country changes.',
      type: 'UseLocalizationCountryGeneratedType',
    },
    {
      title: 'useTimezone',
      description:
        'Returns the time zone of the checkout, and automatically re-renders your component if the time zone changes.',
      type: 'UseTimezoneGeneratedType',
    },
    {
      title: 'useTranslate',
      description:
        'Returns the `I18nTranslate` interface used to translate strings.',
      type: 'UseTranslateGeneratedType',
    },
  ],
  defaultExample: getExample('translate', ['jsx', 'js']),
  examples: {
    description: '',
    examples: [getExample('translate-pluralization', ['jsx', 'js'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
