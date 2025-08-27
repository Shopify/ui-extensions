import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DatePicker';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'date-picker-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DatePickerElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'DatePickerElementEvents',
    },
  ],
  defaultExample: {
    image: 'date-picker-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-date-picker.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
