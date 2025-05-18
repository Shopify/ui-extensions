import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'Use `s-choice-list` to present multiple options to merchants. Choice lists can present options with either radio buttons for single selection or checkboxes for multiple selection.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'Select',
      url: 'select',
    },
    {
      type: 'component',
      name: 'Checkbox',
      url: 'checkbox',
    },
  ],
};

export default data;
