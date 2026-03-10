import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Box';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  bestPractices: `- Use \`s-box\` when you need a container that preserves the natural size of its contents.
- Use \`s-box\` inside of layout components like \`s-stack\` to prevent children from stretching.
- \`s-box\` has \`display: block\` by default.
- Prefer \`s-box\` when you don't need the features of more specialized components like \`s-stack\`.
- Use \`s-box\` to group elements and apply styling or layout without changing their natural size.`,
});

export default data;
