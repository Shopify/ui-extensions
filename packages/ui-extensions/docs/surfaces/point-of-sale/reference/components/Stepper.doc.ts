import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stepper',
  description:
    'The `Stepper` component provides increment and decrement controls for numeric values with visual feedback. Use it to adjust quantities, counts, or other numeric values with clear visual buttons.\n\nThe component provides visual increment and decrement controls with customizable step values and min/max constraints to control numeric adjustments. It supports both button clicks and keyboard input for flexibility, with visual feedback for boundary conditions and disabled states to prevent invalid value entries during quantity adjustments or numeric configurations.\n\n`Stepper` components provide continuous increment behavior when buttons are held down, enabling rapid value changes while still supporting single-step precision adjustments for fine-tuned control.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Stepper` component.',
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
