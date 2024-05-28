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
    image: 'number-field-default.png',
    codeblock: generateCodeBlock(
      'Number input',
      'number-field',
      'number-input',
    ),
  },
  thumbnail: 'number-field-thumbnail.png',
};

export default data;
