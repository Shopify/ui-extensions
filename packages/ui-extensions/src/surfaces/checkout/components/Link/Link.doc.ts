import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Link';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  bestPractices: `
- Use links primarily for navigation and use buttons primarily for actions.

- The HTML that renders for the \`s-button\` and \`s-link\` components includes style and accessibility information. Use these components intentionally and consistently to provide a more inclusive experience for assistive technology users and a more cohesive visual experience for sighted users.
      `,
});

export default data;
