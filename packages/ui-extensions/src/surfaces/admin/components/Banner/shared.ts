const shared = {
  name: 'Banner',
  description:
    "Use `s-banner` to communicate important messages to merchants. They are designed to be noticeable but not disruptive to the merchant's workflow.",
  requires: '',
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'A component for displaying prominent messages or alerts.',
      type: 'Banner',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'tone',
      title: 'Tone',
      sectionContent: `
- Use \`info\` for general information or updates
- Use \`success\` for successful operations or positive messages
- Use \`warning\` for important notices that require attention
- Use \`critical\` for errors or critical issues that need immediate attention
      `,
    },
  ],
  related: [
    {
      type: 'component',
      name: 'Badge',
      url: '/docs/api/admin-extensions/components/feedback/badge',
    },
  ],
};

export default shared;
