import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stepper',
  description:
    'The Stepper component provides increment and decrement controls for numeric values with visual feedback. Use it to adjust quantities, counts, or other numeric values with clear visual buttons.\n\nThe component provides visual increment and decrement controls with customizable step values and min/max constraints to control numeric adjustments. It supports both button clicks and keyboard input for flexibility, with visual feedback for boundary conditions and disabled states to prevent invalid value entries during quantity adjustments or numeric configurations.\n\nStepper components provide continuous increment behavior when buttons are held down, enabling rapid value changes while still supporting single-step precision adjustments for fine-tuned control.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Stepper component.',
      type: 'StepperProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  thumbnail: 'stepper-thumbnail.png',
  defaultExample: {
    image: 'stepper-default.png',
    codeblock: generateCodeBlock(
      'Increment and decrement numeric values',
      'stepper',
      'default.example',
    ),
    description:
      'Adjust numeric values with visual increment and decrement controls. This example demonstrates a Stepper with customizable step values and min/max constraints, supporting both button clicks and keyboard input for quantity adjustments or numeric configurations.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use initialValue for default starting points:** Set \`initialValue\` to a sensible default that makes sense for your use case, such as 1 for quantities or a typical value for settings.\n- **Let the component manage its own state:** By default, Stepper manages its own internal state—you only need to respond to \`onValueChanged\` to capture the new value. Avoid using the \`value\` property unless you specifically need to override the internal state for external synchronization.\n- **Handle value changes appropriately:** Implement the \`onValueChanged\` callback to capture value changes and update your application state, trigger calculations, or perform related actions based on the new numeric value.\n- **Provide visual context for stepper values:** While Stepper handles the increment/decrement controls, consider displaying the current value prominently alongside the Stepper buttons so users can see the exact numeric value, not just the controls.\n- **Design for touch interaction:** Stepper buttons are optimized for touch interaction on POS devices. Ensure adequate spacing around the Stepper buttons and consider the overall layout to prevent accidental taps on adjacent controls.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Stepper provides increment/decrement controls only—if users need to enter specific values directly by keyboard, combine Stepper with a NumberField component.\n- The component manages integer values by default—fractional or decimal increments require using the optional \`value\` property with external state management.\n- Stepper doesn't include labels or field descriptions—combine with Text components or other UI elements to provide context about what value is being adjusted.\n`,
    },
  ],
};

export default data;
