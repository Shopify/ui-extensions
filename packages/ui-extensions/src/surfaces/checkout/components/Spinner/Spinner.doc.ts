import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Spinner';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Display a large spinner with descriptive text while an operation completes. This example uses the `size` and `accessibilityLabel` properties and pairs the spinner with visible text to communicate the loading state.',
        codeblock: {
          title: 'Display a loading spinner with descriptive text',
          tabs: [
            {
              code: './examples/spinner-with-text.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
