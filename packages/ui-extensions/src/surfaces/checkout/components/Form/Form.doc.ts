import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Form';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Group multiple input fields for submission using `s-form`. This example demonstrates a form with a text field, email field, text area, and a submit button.',
        codeblock: {
          title: 'Build a form with multiple fields',
          tabs: [
            {
              code: './examples/form-with-fields.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  bestPractices: `
- Wrap around all form input elements.
- Forms can have only one submit button and it must be at the end of the form.`,
});

export default data;
