import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Icon';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Display icons with semantic tones and custom sizes to convey status. This example uses the `tone` property for success, warning, and info states alongside the `size` property for emphasis.',
        codeblock: {
          title: 'Show status icons with tone and size',
          tabs: [
            {
              code: './examples/icon-status.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
