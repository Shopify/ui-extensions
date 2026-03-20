import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DatePicker';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Grey out past dates and specific days of the week on the calendar. This example shows a date picker with `disallow="past"` and `disallowDays` excluding Sundays.',
        codeblock: {
          title: 'Restrict selectable calendar dates',
          tabs: [
            {
              code: './examples/date-picker-restricted.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
