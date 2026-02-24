import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The Text component renders inline text with support for font weight, style, variant, overflow behavior, and accessibility roles. Use it for non-heading, non-paragraph text that needs typographic control, such as labels, metadata, or emphasized words within a sentence.\n\nFor block-level text with spacing, use [Paragraph](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/paragraph). For titles and section headings, use [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading).',
  requires: '',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Text component.',
      type: 'TextProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Typography and content',
  defaultExample: {
    image: 'text-default.png',
    description:
      'Differentiate a current price from a compare-at price with bold and italic styling. This example uses `Text` with `fontWeight` for the current price and `fontStyle` for the compare-at value, showing how props change the visual weight of inline content.',
    codeblock: {
      title: 'Highlight product pricing',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Text/examples/basic-text.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-text.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Communicate product status warnings with proper screen reader semantics using `fontStyle` and `accessibilityRole`. This example marks a draft status notice with `emphasis` and an action-required message with `strong`, so assistive technology conveys the visual urgency correctly.',
        codeblock: {
          title: 'Emphasize text for screen readers',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Text/examples/text-emphasis.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/text-emphasis.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Prevent long product descriptions from breaking your layout using `textOverflow="ellipsis"`. This example truncates content that exceeds its container width, keeping the block extension UI compact while still displaying the beginning of the text.',
        codeblock: {
          title: 'Truncate long descriptions',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Text/examples/text-overflow.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/text-overflow.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use bold sparingly:** Apply \`fontWeight\` to emphasize key words or values within a sentence, not entire paragraphs. Overusing bold dilutes its impact and makes content harder to scan.
- **Use Paragraph for block-level text:** Text renders inline by default. For block-level content with appropriate spacing between blocks, use the [Paragraph](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/paragraph) component instead.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Text renders inline and flows with surrounding content. It doesn't add vertical spacing or block-level behavior. For block-level text with built-in spacing, use the [Paragraph](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/paragraph) component.
- The \`textOverflow\` prop only takes effect when the parent container constrains the available width. Without a width constraint, text will wrap rather than truncate.
- Text doesn't support color or tone props. To communicate status through color, use the [Badge](/docs/api/admin-extensions/{API_VERSION}/ui-components/feedback-and-status-indicators/badge) component instead.`,
    },
  ],
  related: [],
};

export default data;
