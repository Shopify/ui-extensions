import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Banner';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  bestPractices: `- Use banners sparingly and only for important information. Too many banners can distract from the main content.
- Place banners at the top of a page or section, below the relevant header.
- Include a Button with a next step whenever possible.
- Make banners dismissible unless they are critical or require action.
- Use \`info\` for general updates or advice.
- Use \`warning\` to highlight things that need attention. Use sparingly as it can add stress.
- Use \`critical\` for problems that must be resolved.`,
});

export default data;
