import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DateField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'date-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DateFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'DateFieldElementEvents',
    },
  ],
  defaultExample: {
    image: 'date-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-date-field.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Restrict selectable dates by excluding past dates and specific days of the week. This example displays a delivery date field with `disallow="past"` and `disallowDays` set to exclude weekends.',
        codeblock: {
          title: 'Restrict selectable dates',
          tabs: [
            {
              code: './examples/date-field-restricted.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
