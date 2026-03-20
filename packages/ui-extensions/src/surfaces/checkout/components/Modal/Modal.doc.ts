import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Modal';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {
    properties: true,
    events: true,
    slots: true,
    methods: true,
  },
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Ask the buyer to confirm before cancelling an order. This example demonstrates a small modal with a warning message, a critical-toned primary button, and a secondary button to keep the order.',
        codeblock: {
          title: 'Confirm a destructive action in a modal',
          tabs: [
            {
              code: './examples/modal-with-actions.example.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Collect input inside a modal without leaving the checkout flow. This example demonstrates a gift message form with text fields, a text area, and a checkbox, using the action slots for save and cancel buttons.',
        codeblock: {
          title: 'Collect input with a form modal',
          tabs: [
            {
              code: './examples/modal-with-form.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
