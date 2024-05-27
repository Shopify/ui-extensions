import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForTimePicker = (title: string, fileName: string) =>
  generateCodeBlock(title, 'time-picker', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'TimePicker',
  description: 'A component used to select a time through a dialog.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TimePicker',
      description: '',
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
