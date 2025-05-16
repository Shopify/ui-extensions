import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description:
    'Use `s-checkbox` when you want to provide users with a clear selection option, such as for agreeing to terms and conditions or selecting multiple options from a list.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'Switch',
      url: 'switch',
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
