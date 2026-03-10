import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/TextField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  bestPractices: `- Label text fields clearly so it's obvious what information to enter.
- Label optional fields as optional (e.g. "First name (optional)").
- Do not pass \`required: true\` for optional fields.`,
});

export default data;
