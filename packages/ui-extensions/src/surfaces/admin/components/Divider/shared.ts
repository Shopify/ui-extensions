const shared = {
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Separating elements inside sections.
- Visually grouping related content in forms and lists.`,
    },
  ],
  thumbnail: '/assets/templated-apis-screenshots/admin/components/divider.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Divider',
    },
  ],
  defaultExample: {
    image: 'divider-default.png',
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
