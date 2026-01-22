import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Time';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  bestPractices:
    '- Use Time component for displaying time values to ensure consistent formatting.\n\n- Provide time values in a clear, readable format.\n\n- Consider using 24-hour format for international audiences.\n\n- Include timezone information when relevant.\n\n- Use Time component for any time-related content to maintain semantic meaning.',
});

export default data;
