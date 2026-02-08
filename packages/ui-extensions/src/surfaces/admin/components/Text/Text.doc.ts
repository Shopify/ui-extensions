import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The `Text` component renders inline text with support for font weight, style, variant, overflow behavior, and accessibility roles. Use it for non-heading text that needs typographic control, such as labels, metadata, or emphasized words within a sentence.\n\nFor titles and section headings, use [`Heading`](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading).',
  requires: '',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Text` component.',
      type: 'TextProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Typography and content',
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'Simple Text example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Text/examples/basic-Text.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Text.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use bold sparingly:** Apply \`fontWeight\` to emphasize key words or values within a sentence, not entire paragraphs. Overusing bold dilutes its impact and makes content harder to scan.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- \`Text\` renders inline and flows with surrounding content. It doesn't add vertical spacing or block-level behavior.
- The \`textOverflow\` prop only takes effect when the parent container constrains the available width. Without a width constraint, text will wrap rather than truncate.
- \`Text\` doesn't support color or tone props.`,
    },
  ],
  related: [],
};

export default data;
