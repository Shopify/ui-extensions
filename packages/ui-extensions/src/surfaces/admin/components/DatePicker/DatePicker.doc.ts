import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/DatePicker';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/datepicker.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'DatePicker',
      description: '',
      type: 'DatePicker',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'DatePickerEvents',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
};

export default data;
