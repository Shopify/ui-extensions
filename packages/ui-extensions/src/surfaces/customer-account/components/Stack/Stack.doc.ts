import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Stack';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  usefulFor: `- Arranging items in rows or columns when sections don't quite fit.
- Controlling the spacing between elements.`,
  considerations: `- Stack has no default padding. Use \`base\` padding if you need default padding.
- When space is limited, Stack wraps its children to a new line.`,
  bestPractices: `- Use smaller gaps for smaller elements and larger gaps for bigger ones.
- Keep spacing consistent across the app.`,
});

export default data;
