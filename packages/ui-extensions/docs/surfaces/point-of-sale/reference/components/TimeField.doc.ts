import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TimeField',
  description:
    'The TimeField component captures time input from merchants with a consistent interface for time selection and proper validation. Use it to collect time information in scheduling, booking, or data entry workflows.\n\nThe component supports both 12-hour and 24-hour time formats based on locale settings, with built-in validation to ensure valid time entries. It includes features like time picker integration, keyboard shortcuts, and formatted display to streamline time entry for scheduling, appointment booking, and time-sensitive operations in retail environments.\n\nTimeField components respects merchant locale settings for default time format preferences while allowing manual override for specific use cases that require alternative formats.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the TimeField component.',
      type: 'TimeFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  defaultExample: {
    image: 'time-field-default.png',
    codeblock: generateCodeBlock(
      'Capture time input with validation',
      'time-field',
      'time-input',
    ),
    description:
      'Collect time information using a text-based input field with built-in validation. This example shows a TimeField that supports both 12-hour and 24-hour formats based on locale, with time picker integration and keyboard shortcuts for scheduling and time-sensitive operations.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Provide clear labels for time context:** Use specific labels that indicate what time is being requested, like specific examples rather than generic Time. This helps users understand the context and purpose.\n- **Offer helpful guidance with helpText:** Use the \`helpText\` property to explain time constraints, business hours, or format expectations. For example, Business hours only (9 AM - 5 PM) or Must be a future time.\n- **Implement proper time validation:** Use the \`error\` property to display validation messages when users enter invalid times or times outside acceptable ranges. Provide clear, actionable error messages that help users correct their input.\n- **Add action buttons for time operations:** Use the \`action\` property to provide helpful actions like Set to Now, Clear Time, or Use Business Hours. This enhances usability by providing quick access to common time operations.\n- **Handle focus events for time picker coordination:** Use \`onFocus\` and \`onBlur\` callbacks to coordinate with TimePicker components or other time selection interfaces. This is useful for showing/hiding time pickers or managing related form fields.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- TimeField provides text-based time input—for visual time selection with clock or spinner interfaces, use the TimePicker component which offers interactive time selection.\n- The \`is24Hour\` property only affects Android devices—other platforms may use their system-level time format preferences regardless of this setting.\n- Action buttons are limited to simple press callbacks—complex action workflows require custom implementation or additional components.\n`,
    },
  ],
  thumbnail: 'time-field-thumbnail.png',
};

export default data;
