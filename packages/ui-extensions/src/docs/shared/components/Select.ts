import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Select',
  description:
    '`s-select` lets merchants choose one option from an options menu. Consider `s-select` when you have 4 or more options, to avoid cluttering the interface.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'ChoiceList',
      url: 'choice-list',
    },
    {
      type: 'component',
      name: 'Checkbox',
      url: 'checkbox',
    },
  ],
};

export default data;
