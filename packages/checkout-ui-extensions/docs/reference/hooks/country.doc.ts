import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useLocalizationCountry',
  description: '',
  descriptionType: 'UseLocalizationCountryGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Localization',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseLocalizationCountryGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
