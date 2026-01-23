import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/TextField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  bestPractices: `
- Clearly label text fields so that it’s obvious what customers should enter.
- Label text fields as optional when input isn’t required. For example, use the label <b>First name (optional)</b>.
- Don’t have optional fields pass true to the required property.`,
});

export default data;
