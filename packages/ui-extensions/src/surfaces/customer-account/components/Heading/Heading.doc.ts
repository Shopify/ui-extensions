import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Heading';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  usefulFor: `- Creating consistent titles and subtitles throughout a page.
- Helping users with assistive technology (such as screen readers) navigate content.`,
  considerations: `- The heading level is determined by the level of nesting, starting at h2.
- Prefer using the \`heading\` prop in \`s-section\`. Only use \`s-heading\` when you need a custom heading layout.`,
  bestPractices: `- Use short headings for quick scanning.
- Use plain, clear terms.
- Avoid jargon and technical language.
- Avoid using different terms for the same concept.
- Avoid duplicating content from the surrounding context.`,
});

export default data;
