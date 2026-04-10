import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Time';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  bestPractices: `- Use the time component for all time values to keep formatting consistent.
- Show times in a clear, readable format.
- Consider 24-hour format for international audiences.
- Include timezone information when relevant.
- Use the time component for time-related content to maintain clear semantics.`,
});

export default data;
