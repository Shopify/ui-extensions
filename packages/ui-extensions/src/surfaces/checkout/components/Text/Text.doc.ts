import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Text';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  usefulFor: `
- Adding inline text elements such as labels or line errors.
- Applying different visual tones and text styles to specific words or phrases within a \`s-paragraph\`, such as a \`strong\` type or \`critical\` tone.`,
  bestPractices: `
- Use plain and clear terms.
- Don’t use jargon or technical language.
- Don’t use different terms to describe the same thing.
- Don’t duplicate content.`,
});

export default data;
