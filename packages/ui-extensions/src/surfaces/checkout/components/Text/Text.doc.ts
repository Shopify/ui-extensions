import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Text';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextProps',
    },
  ],
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-text.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: 'Examples of additional ways to use the Text component.',
    examples: [
      {
        description:
          'Use `type="strong"` for default strong emphasis and `tone="neutral"` for informational policy text without success or warning coloring.',
        codeblock: {
          title: 'Emphasize a legal or policy line',
          tabs: [
            {
              code: './examples/text-strong.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic',
      anchorLink: 'useful-for',
      sectionContent: `
- Adding inline text elements such as labels or line errors.
- Applying different visual tones and text styles to specific words or phrases within a \`s-paragraph\`, such as a \`strong\` type or \`critical\` tone.`,
    },
    {
      title: 'Best practices',
      type: 'Generic',
      anchorLink: 'best-practices',
      sectionContent: `
- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
    },
  ],
};

export default data;
