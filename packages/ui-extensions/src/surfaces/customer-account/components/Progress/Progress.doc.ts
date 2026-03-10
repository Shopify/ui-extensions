import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Progress';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  bestPractices: `- Pair Progress with Paragraph or Text to communicate the current status of a process.
- **Loading states:** Add reassuring text to indicate the bar is still loading.
- **Error states:** Add text or a critical Banner to describe the error and next steps. Use the \`critical\` tone.
- **Goals:** Use Progress to visualize meaningful goals, such as rewards tiers or free shipping thresholds.`,
});

export default data;
