import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'The DateField component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.\n\nDateField components support both manual text entry and picker selection, giving merchants flexibility to choose their preferred input method based on personal preference and specific date entry scenarios.\n\nFor visual calendar-based selection, consider DatePicker. The component validates dates in real-time and provides clear error messages for invalid entries, preventing form submission errors and reducing the need for merchants to correct date inputs multiple times.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the DateField component.',
      type: 'DateFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  defaultExample: {
    image: 'date-field-default.png',
    codeblock: generateCodeBlock(
      'Capture date input with validation',
      'date-field',
      'date-input',
    ),
    description:
      'Collect date information using a text-based input field with built-in validation. This example shows how to implement a DateField that supports both manual text entry and picker selection, providing merchants with flexible date input options for scheduling, filtering, or data entry tasks.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use clear and specific labels:** Provide descriptive labels that indicate what date is being requested, such as Delivery Date or Appointment Date rather than generic Date. This helps users understand the context and purpose of the field.\n- **Provide helpful guidance with helpText:** Use the \`helpText\` property to explain date constraints, format expectations, or other requirements. For example, Select a date within the next 30 days or Must be a future date.\n- **Implement proper validation and error handling:** Use the \`error\` property to display validation messages when users enter invalid dates. Provide clear, actionable error messages that help users correct their input.\n- **Handle date values consistently:** The field defaults to the current date when no value is provided. Update the \`value\` property in response to the \`onChange\` callback to maintain controlled component behavior and ensure predictable state management.\n- **Use action buttons for enhanced functionality:** Use the \`action\` property to provide quick access to related functionality like Clear Date, Set to Today, or Show Calendar. This enhances usability without cluttering the interface.\n- **Differentiate between input and change callbacks:** Use \`onInput\` for immediate feedback like clearing validation errors as soon as users start typing. Reserve \`onChange\` for updating the field value when editing is complete. Never use \`onInput\` to update the \`value\` property.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- DateField provides text-based date input—for calendar-style visual date selection, use the DatePicker component which offers an interactive calendar interface.\n- The field defaults to the current date rather than being empty—if you need an empty initial state, explicitly set the \`value\` property to an empty string.\n- Action buttons are limited to simple press callbacks—complex action workflows require custom implementation or additional components.\n`,
    },
  ],
  thumbnail: 'date-field-thumbnail.png',
};

export default data;
