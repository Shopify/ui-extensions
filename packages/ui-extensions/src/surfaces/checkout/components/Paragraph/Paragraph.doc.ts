import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Paragraph';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: 'paragraph-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ParagraphProps',
    },
  ],
  defaultExample: {
    image: 'paragraph-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-paragraph.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description:
      'Examples of additional ways to use the Paragraph component.',
    examples: [
      {
        description:
          'Use `tone="warning"` for semantic intent and `color="subdued"` for de-emphasized text. This pattern pairs well with validation or delivery messaging.',
        codeblock: {
          title: 'Warn about address issues with tone and color',
          tabs: [
            {
              code: './examples/paragraph-warning.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Create contrast between more and less important text with properties such as `color` and `tone`.',
    },
  ],
};

export default data;
