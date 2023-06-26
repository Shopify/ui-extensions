import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useCurrency',
  description: '',
  descriptionType: 'UseCurrencyGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Localization',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseCurrencyGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
