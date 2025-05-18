import {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'Use `s-email-field` to allow merchants to input email addresses. This component provides built-in email validation and appropriate keyboard settings.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: 'textfield',
    },
    {
      type: 'component',
      name: 'TextArea',
      url: 'textarea',
    },
  ],
};

export default data;
