import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Switch',
  description:
    'Use `s-switch` when you want to provide users with a clear selection option, such as toggling options on/off.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'Checkbox',
      url: 'checkbox',
    },
    {
      type: 'component',
      name: 'Select',
      url: 'select',
    },
    {
      type: 'component',
      name: 'ChoiceList',
      url: 'choice-list',
    },
  ],
};

export default data;
