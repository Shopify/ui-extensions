import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForDatePicker = (title: string, fileName: string) =>
  generateCodeBlock(title, 'date-picker', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'The `DatePicker` component allows merchants to select a specific date using a calendar-like picker interface. Use it to provide visual date selection with an intuitive calendar view for improved user experience.\n\n`DatePicker` offers a calendar-based alternative to direct text input. The calendar interface allows merchants to see dates in context of the full month, making it easier to select dates relative to specific days of the week or to visualize date ranges within a month view. For simple date entry when users know the exact date, use `DateField`.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DatePicker` component.',
      type: 'DatePickerProps',
    },
  ],
  category: 'Components',
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
};

export default data;
