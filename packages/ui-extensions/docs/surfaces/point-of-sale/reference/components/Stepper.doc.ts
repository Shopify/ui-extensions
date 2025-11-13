import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stepper',
  description:
    'Provide increment and decrement controls for numeric values with visual feedback.',
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
  thumbnail: 'stepper-thumbnail.png',
  defaultExample: {
    image: 'stepper-default.png',
    codeblock: generateCodeBlock('Stepper', 'stepper', 'default.example'),
  },
};

export default data;
