import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'Use `s-text-area` when you need to collect longer text content from merchants. Text areas allow for multiple lines of text and automatically expand to fit the content.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: 'textfield',
    },
  ],
};

export default data;
