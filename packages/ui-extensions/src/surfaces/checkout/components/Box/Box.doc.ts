import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Box';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {
    properties: true,
  },
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Uses `background="base"` with `border`, `borderRadius="large"`, and `padding="large"` to create a prominent callout. The `accessibilityLabel` provides context for assistive technology when the content alone is insufficient.',
        codeblock: {
          title: 'Highlight a callout with a bordered box',
          tabs: [
            {
              code: './examples/box-callout.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  bestPractices: `
- Use \`s-box\` when you need a container that preserves the natural size of its contents.
- \`s-box\` is particularly useful in layout components like \`s-stack\` where you want to prevent children from stretching to fit.
- \`s-box\` has a \`display: block\` layout by default.
- Use \`s-box\` for simple container needs where you don't need the additional features of more specialized components like \`s-stack\`.
- Consider using \`s-box\` when you need to apply specific styling or layout properties to a group of elements without affecting their natural dimensions.`,
});

export default data;
