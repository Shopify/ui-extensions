import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Heading';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  usefulFor: `- Creating titles and subtitles for your content that are consistent across your app.
- Helping users with visual impairments navigate through content effectively using assistive technologies like screen readers.`,
  considerations: `- The level of the heading is automatically determined by how deeply it's nested inside other components, starting from h2.
- Default to using the \`heading\` property in \`s-section\`. The \`s-heading\` component should only be used if you need to implement a custom layout for your heading in the UI.`,
  extraExamples: {
    description: 'Examples of additional ways to use the Heading component.',
    examples: [
      {
        description:
          'Set `accessibilityRole="presentation"` to suppress heading semantics. Use this when a parent region already provides the heading and this element serves only as a visual title.',
        codeblock: {
          title: 'Use presentation role for visual-only headings',
          tabs: [
            {
              code: './examples/heading-presentation.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  bestPractices: `
- Use short headings to make your content scannable.
- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
});

export default data;
