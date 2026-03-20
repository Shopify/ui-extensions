import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/URLField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Validate that a URL is provided with a message explaining what link is expected. This example shows a required return policy URL field with an error message.',
        codeblock: {
          title: 'Require a URL with validation',
          tabs: [
            {
              code: './examples/url-field-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
