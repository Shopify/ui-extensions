import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Paragraph',
  description:
    'The Paragraph component renders a block of text with appropriate spacing between sibling paragraphs. Use it for body copy, descriptions, and any multi-sentence content. It supports font size, weight, style, and text overflow control through its typography props.\n\nFor inline text within a sentence, use [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text). For titles, use [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading).',
  requires: '',
  thumbnail: 'paragraph-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Paragraph component.',
      type: 'ParagraphProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Typography and content',
  defaultExample: {
    image: 'paragraph-default.png',
    description:
      'Show a sync status message with bolded key figures like the completion time and field count. This example nests [Text](/docs/api/admin-extensions/{API_VERSION}/components/typography-and-content/text) with `fontWeight` props inside a `Paragraph` to emphasize specific details within a sentence.',
    codeblock: {
      title: 'Display product sync summary',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Paragraph/examples/basic-paragraph.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-paragraph.example.ts',
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
          'Present fulfillment instructions that include an inline [Link](/docs/api/admin-extensions/{API_VERSION}/components/actions/link) to external documentation. This example shows how to nest interactive elements inside a paragraph to provide contextual help alongside instructional text.',
        codeblock: {
          title: 'Embed inline links in help text',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Paragraph/examples/paragraph-with-links.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/paragraph-with-links.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Show or hide guidance based on product status retrieved from the [GraphQL Admin API](/docs/api/admin-graphql/). This example queries the product status and conditionally renders a paragraph with publishing instructions when the product is in draft, helping merchants understand what steps remain.',
        codeblock: {
          title: 'Show conditional help text',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Paragraph/examples/paragraph-conditional.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/paragraph-conditional.example.ts',
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
      sectionContent: `- **Keep paragraphs focused:** Each paragraph should convey a single idea or piece of information. Short, focused paragraphs are easier for merchants to scan.
- **Nest Text inside Paragraph for inline formatting:** To add emphasis, bold, or other inline styling within a paragraph, nest [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) components inside the Paragraph. This preserves the block-level layout while giving you typographic control.
- **Pair with Heading for structure:** Place a [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) before a group of paragraphs to give the section a clear title that helps merchants navigate the content.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Paragraph doesn't support color or tone props. Text inside a Paragraph always renders in the default body text color.
- The \`textOverflow\` prop takes effect only when the parent container constrains width. Without a width constraint, text will wrap normally rather than truncate.
- Paragraph doesn't support alignment (center, right). Text always renders with the default start alignment for the current locale direction.`,
    },
  ],
  related: [],
};

export default data;
