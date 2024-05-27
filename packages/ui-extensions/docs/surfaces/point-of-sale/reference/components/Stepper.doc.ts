import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stepper',
  description: 'A component used for increasing or decreasing quantities.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Stepper',
      description: '',
      type: 'StepperProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    codeblock: generateCodeBlock('Stepper', 'stepper', 'default.example'),
  },
};

export default data;
