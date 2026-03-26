import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Paragraph';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description:
      'Examples of additional ways to use the Paragraph component.',
    examples: [
      {
        description:
          'Use `tone="warning"` for semantic intent and `color="subdued"` for de-emphasized text. This pattern pairs well with validation or delivery messaging.',
        codeblock: {
          title: 'Warn about address issues with tone and color',
          tabs: [
            {
              code: './examples/paragraph-warning.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  bestPractices:
    '- Create contrast between more and less important text with properties such as `color` and `tone`.',
});

export default data;
