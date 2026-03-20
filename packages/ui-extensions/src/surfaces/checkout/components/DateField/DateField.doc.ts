import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DateField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
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
});

export default data;
