import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForTimePicker = (title: string, fileName: string) =>
  generateCodeBlock(title, 'time-picker', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'TimePicker',
  description:
    'The TimePicker component allows merchants to select a specific time using an interactive picker interface. Use it to provide visual time selection for improved user experience and reduced input errors.\n\nTimePicker offers a more visual and touch-friendly alternative to text-based time input, making time selection faster and more accurate. The picker interface provides an intuitive way to select hours and minutes through an interactive interface.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the TimePicker component.',
      type: 'TimePickerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  thumbnail: 'time-picker-thumbnail.png',
  defaultExample: {
    image: 'time-picker-default.png',
    codeblock: generateCodeBlockForTimePicker(
      'Select time with a picker',
      'default.example',
    ),
    description:
      'Enable time selection using an interactive picker interface. This example demonstrates a TimePicker that provides a visual, touch-friendly way to select hours and minutes, making time selection faster and more accurate than text-based input for scheduling workflows.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Choose appropriate input modes for your platform:** Use \`'inline'\` mode (clock) on Android when users benefit from seeing a clock interface. iOS only supports \`'spinner'\` mode, so design your time selection experience to work well with spinners across all platforms.\n- **Configure time format for Android users:** Use the \`is24Hour\` property to control whether Android devices display times in 24-hour or 12-hour format. Set this based on your target audience's preferences and regional conventions. This property only affects Android devices.\n- **Handle time selection with onChange:** Implement the \`onChange\` callback to capture selected times and update your application state accordingly. This callback receives the selected time string that you can use to update UI or trigger related actions.\n- **Default to current time thoughtfully:** The picker defaults to the current time when no \`selected\` value is provided. If you need a different starting time or want to guide users to a specific time period, explicitly set the \`selected\` property.\n- **Provide clear triggers for showing the picker:** Since visibility is controlled by \`visibleState\`, ensure you have clear UI elements like buttons or field interactions that toggle the picker visibility. Users should understand how to open and close the time picker.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- TimePicker requires external visibility state management through the \`visibleState\` tuple—automatic show/hide behavior based on field focus is not built-in.\n- The \`inputMode\` property has platform limitations—iOS only supports spinner mode regardless of the \`inputMode\` setting, which may affect cross-platform consistency.\n- The \`is24Hour\` property only affects Android devices—iOS and other platforms use their system-level time format preferences regardless of this setting.\n- The component provides time selection but doesn't include field labels, help text, or error messaging—combine with other UI elements or text components to provide complete form field experiences.\n`,
    },
  ],
};

export default data;
