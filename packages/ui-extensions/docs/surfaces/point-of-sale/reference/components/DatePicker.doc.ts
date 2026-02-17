import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForDatePicker = (title: string, fileName: string) =>
  generateCodeBlock(title, 'date-picker', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'The DatePicker component allows merchants to select a specific date using a calendar-like picker interface. Use it to provide visual date selection with an intuitive calendar view for improved user experience.\n\nDatePicker offers a calendar-based alternative to direct text input. The calendar interface allows merchants to see dates in context of the full month, making it easier to select dates relative to specific days of the week or to visualize date ranges within a month view. For simple date entry when users know the exact date, use DateField.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the DatePicker component.',
      type: 'DatePickerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  related: [],
  thumbnail: 'date-picker-thumbnail.png',
  defaultExample: {
    image: 'date-picker-default.png',
    codeblock: generateCodeBlockForDatePicker(
      'Select a date with a calendar',
      'default.example',
    ),
    description:
      'Enable date selection using an intuitive calendar interface. This example demonstrates a DatePicker that displays dates in a monthly calendar view, making it easier for merchants to select dates in context and visualize date relationships, ideal for scheduling or date range selection.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Manage visibility state with the tuple pattern:** Use the \`visibleState\` tuple to control when the picker is shown or hidden. This pattern ensures consistent visibility management.\n- **Handle date selection with onChange:** Implement the \`onChange\` callback to capture selected dates and update your application state accordingly. This callback receives the selected date string that you can use to update UI or trigger related actions.\n- **Provide clear triggers for showing the picker:** Since visibility is controlled by \`visibleState\`, ensure you have clear UI elements like buttons or field interactions that toggle the picker visibility. Users should understand how to open and close the date picker.\n- **Default to current date thoughtfully:** The picker defaults to the current date when no \`selected\` value is provided. If you need a different starting date or want to guide users to a specific time period, explicitly set the \`selected\` property.\n- **Optimize for touch interaction:** Both input modes are designed for touch interaction on POS devices. Ensure adequate spacing around trigger elements and consider how the picker overlay affects the overall interface layout.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- DatePicker requires external visibility state management through the \`visibleState\` tuple—automatic show/hide behavior based on field focus isn't built-in.\n- The component provides date selection but doesn't include field labels, help text, or error messaging—combine with other UI elements or text components to provide complete form field experiences.\n- Input mode determines the interaction pattern but can't be changed dynamically while the picker is visible—you must set the mode before displaying the picker.\n`,
    },
  ],
};

export default data;
