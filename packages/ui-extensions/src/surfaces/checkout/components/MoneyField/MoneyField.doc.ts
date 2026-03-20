import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/MoneyField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Constrain a monetary value to a valid range with specific increments. This example shows a tip amount field with `min`, `max`, and `step` props.',
        codeblock: {
          title: 'Constrain a money field to a range',
          tabs: [
            {
              code: './examples/money-field-range.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
