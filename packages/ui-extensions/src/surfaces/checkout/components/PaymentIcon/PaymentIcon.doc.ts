import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PaymentIcon';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Provide custom accessible names for payment method icons. This example uses `accessibilityLabel` to supply localized or descriptive names for screen readers when the default icon label is insufficient.',
        codeblock: {
          title: 'Label payment icons for screen readers',
          tabs: [
            {
              code: './examples/payment-icon-labeled.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
