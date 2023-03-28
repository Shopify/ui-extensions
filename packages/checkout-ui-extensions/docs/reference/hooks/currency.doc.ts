import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useCurrency',
  description:
    'Returns the currency of the checkout, and automatically re-renders your component if the currency changes.',
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
