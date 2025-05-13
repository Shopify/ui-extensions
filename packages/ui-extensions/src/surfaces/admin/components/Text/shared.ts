const shared = {
  name: 'Text',
  description: `
  Use \`s-text\` for inline text styling, similar to HTML's span elements. When adding an icon inside \`s-text\`, it automatically adopts the tone of the text.

  #### Useful for:
  - Adding inline text elements such as labels or line errors.
  - Applying different visual tones and text styles to specific words or phrases within a \`s-paragraph\`, such as a \`strong\` type or \`critical\` tone.

  #### Best practices
  - Use plain and clear terms.
  - Don't use jargon or technical language.
  - Don't use different terms to describe the same thing.
  - Don't duplicate content.

`,

  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Text',
    },
  ],
  subCategory: 'Titles and text',
  related: [
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/polaris-web-components/titles-and-text/heading',
    },
  ],
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'wrapped',
        },
      ],
    },
  },
};

export default shared;
