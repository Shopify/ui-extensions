import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'Use an email field to conveniently and accurately capture merchant email addresses.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'EmailField',
      description: '',
      type: 'EmailFieldProps',
    },
  ],
  defaultExample: {
    codeblock: generateCodeBlock('Email Input', 'email-field', 'email-input'),
  },
  category: 'Components',
  related: [],
};

export default data;
