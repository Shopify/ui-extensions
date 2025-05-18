const shared = {
  name: 'Stack',
  description:
    'Use `s-stack` to organize elements along the [block or inline axes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) of the page.',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/stack.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Placing items in rows or columns when sections don't work for your layout.
- Controlling the spacing between elements.`,
    },
    {
      title: 'Considerations',
      type: 'Generic' as const,
      anchorLink: 'considerations',
      sectionContent: `- Stack doesn't add any padding by default. If you want padding around your stacked elements, use \`base\` to apply the default padding.
- When spacing becomes limited, Stack will always wrap children to a new line.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use smaller gaps between small elements and larger gaps between big ones.
- Maintain consistent spacing in stacks across all pages of your app.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Stack',
    },
  ],
  subCategory: 'Structure',
  related: [],
  defaultExample: {
    image: 'stack-default.png',
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
