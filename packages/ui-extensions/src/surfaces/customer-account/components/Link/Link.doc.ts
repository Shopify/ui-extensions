import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Link';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  bestPractices: `- Use links for navigation and buttons for actions.
- \`s-button\` and \`s-link\` carry style and accessibility information. Use them consistently for better accessibility and visual coherence.`,
});

export default data;
