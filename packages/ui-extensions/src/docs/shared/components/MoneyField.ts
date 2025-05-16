import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'MoneyField',
  description:
    'Use `s-money-field` when you need to collect monetary values from merchants. It provides appropriate formatting and validation for currency amounts.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'NumberField',
      url: 'numberfield',
    },
    {
      type: 'component',
      name: 'TextField',
      url: 'textfield',
    },
  ],
};

export default data;
