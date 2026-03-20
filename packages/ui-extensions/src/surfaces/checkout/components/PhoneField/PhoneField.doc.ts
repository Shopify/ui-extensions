import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PhoneField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Validate that a phone number is provided with a message explaining why it is needed. This example shows a required contact number field with an error about delivery updates.',
        codeblock: {
          title: 'Require a phone number with validation',
          tabs: [
            {
              code: './examples/phone-field-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
