const shared = {
  name: 'Section',
  description: `
Use \`s-section\` to organize your page content so it matches the Admin design. Sections have defined styling, and will display differently depending on how deeply they are nested in the page. They have built-in spacing so there's no need to wrap children inside \`s-grid/\`, \`s-stack/\`, or \`s-box/\`. 

#### Useful for:
- Organizing content into cards.
- Creating consistency across pages.
- Keeping your layout in line with the Admin design.

#### Level 1
- Display as responsive cards with background color, rounded corners, and shadow effects. 
- Include built-in spacing for nested sections and outer padding, but this padding can be removed when content like \`s-table\` needs to expand to the full width of the section. 
- When you add headings at this level, they automatically use a specific style, which helps keep the content organized and clear.

#### Nested sections
- Don't have any background color or effects by default. 
- When you add headings at this level, they automatically use a specific style and built-in spacing is added between the heading and the content.
    `,

  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Section',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Box',
      url: '/docs/api/admin-extensions/components/structure/box',
    },
    {
      type: 'component',
      name: 'Stack',
      url: '/docs/api/admin-extensions/components/structure/stack',
    },
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/components/titles-and-text/heading',
    },
  ],
  defaultExample: {
    image: 'section-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'page',
        },
      ],
    },
  },
};

export default shared;
