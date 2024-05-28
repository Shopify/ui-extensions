import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForDatePicker = (title: string, fileName: string) =>
  generateCodeBlock(title, 'date-picker', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description: 'A component used to select a date through a dialog.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'DatePicker',
      description: '',
      type: 'DatePickerProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'date-picker-thumbnail.png',
  defaultExample: {
    image: 'date-picker-default.png',
    codeblock: generateCodeBlockForDatePicker('DatePicker', 'default.example'),
  },
};

export default data;
