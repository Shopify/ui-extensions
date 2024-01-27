import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Locale API',
  description:
    'The Locale API allows the extension to retreive the merchants locale.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'LocaleApi',
      description: '',
      type: 'LocaleApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
