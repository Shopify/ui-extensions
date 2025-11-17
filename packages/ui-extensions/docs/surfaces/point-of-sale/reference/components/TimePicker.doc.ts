import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForTimePicker = (title: string, fileName: string) =>
  generateCodeBlock(title, 'time-picker', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'TimePicker',
  description:
    'The `TimePicker` component allows merchants to select a specific time using an interactive picker interface. Use it to provide visual time selection for improved user experience and reduced input errors.\n\n`TimePicker` offers a more visual and touch-friendly alternative to text-based time input, making time selection faster and more accurate. The picker interface provides an intuitive way to select hours and minutes through an interactive interface.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TimePicker` component.',
      type: 'TimePickerProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'time-picker-thumbnail.png',
  defaultExample: {
    image: 'time-picker-default.png',
    codeblock: generateCodeBlockForTimePicker('TimePicker', 'default.example'),
  },
};

export default data;
