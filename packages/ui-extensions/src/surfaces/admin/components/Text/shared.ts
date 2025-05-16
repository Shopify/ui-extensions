const shared = {
  thumbnail: '/assets/templated-apis-screenshots/admin/components/text.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Adding inline text elements such as labels or line errors.
- Applying different visual tones and text styles to specific words or phrases within a \`s-paragraph\`, such as a \`strong\` type or \`critical\` tone.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Text',
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
