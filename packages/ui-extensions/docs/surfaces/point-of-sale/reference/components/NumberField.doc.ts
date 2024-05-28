import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'Use a number field to conveniently and accurately capture numerical values.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'NumberField',
      description: '',
      type: 'NumberFieldProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    codeblock: generateCodeBlock(
      'Number Input',
      'number-field',
      'number-input',
    ),
  },
};

export default data;
