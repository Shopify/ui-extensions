const shared = {
  name: 'Paragraph',
  description:
    'Use `s-paragraph` to display a block of text similar to the `<p>` tag in HTML. This component can also contain other elements such as buttons, links, or text.',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/paragraph.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Displaying text content in a paragraph format.
- Grouping elements with the same style. For instance, icons inside a paragraph will automatically adopt the paragraph's tone.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use short paragraphs to make your content scannable.
- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Paragraph',
    },
  ],
  subCategory: 'Titles and text',
  related: [],
  defaultExample: {
    image: 'paragraph-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default shared;
