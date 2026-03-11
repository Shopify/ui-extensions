import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Text';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  usefulFor: `- Inline text elements such as labels or line errors.
- Applying different tones and text styles (e.g. \`strong\`, \`critical\`) within a \`s-paragraph\`.`,
  bestPractices: `- Use plain, clear terms.
- Avoid jargon and technical language.
- Avoid using different terms for the same concept.
- Avoid duplicating content from the surrounding context.`,
});

export default data;
