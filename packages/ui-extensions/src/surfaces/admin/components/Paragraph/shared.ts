const shared = {
  name: 'Paragraph',
  description: `
  Use \`s-paragraph\` to display a block of text similar to the \`<p>\` tag in HTML. This component can also contain other elements such as buttons, links or text.

  #### Useful for:
  - Displaying text content in a paragraph format.
  - Grouping elements with the same style. For instance, icons inside a paragraph will automatically adopt the paragraph's tone.

  #### Best practices
  - Use short paragraphs to make your content scannable.
  - Use plain and clear terms.
  - Don't use jargon or technical language.
  - Don't use different terms to describe the same thing.
  - Don't duplicate content.

  `,
  thumbnail: 'paragraph-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Paragraph',
    },
  ],
  subCategory: 'Titles and text',
  related: [
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/components/titles-and-text/heading',
    },
  ],
  defaultExample: {
    image: 'paragraph-default.png',
    codeblock: {
      title: 'Default Example',
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
