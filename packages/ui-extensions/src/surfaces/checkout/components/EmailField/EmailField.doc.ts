import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/EmailField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Validate that an email address is provided before the form can be submitted. This example shows a required email field with an error message for missing input.',
        codeblock: {
          title: 'Validate a required email address',
          tabs: [
            {
              code: './examples/email-field-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
