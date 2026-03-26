import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Stack';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Use `justifyContent="space-between"` with `direction="block"` to push the first and last items to opposite ends of the stack. This pattern is common in checkout summary rows.',
        codeblock: {
          title: 'Space items apart with block direction',
          tabs: [
            {
              code: './examples/stack-space-between.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  usefulFor: `
- Placing items in rows or columns when sections don't work for your layout.
- Controlling the spacing between elements.`,
  considerations: `
- Stack doesn't add any padding by default. If you want padding around your stacked elements, use \`base\` to apply the default padding.
- When spacing becomes limited, Stack will always wrap children to a new line.`,
  bestPractices: `
- Use smaller gaps between small elements and larger gaps between big ones.
- Maintain consistent spacing in stacks across all pages of your app.`,
});

export default data;
