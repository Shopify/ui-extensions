const shared = {
  name: 'Stack',
  description: `
  Use \`s-stack\` to organize elements along the [block or inline axes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) of the page.

  #### Useful for:
  - Placing items in rows or columns when sections don't work for your layout.
  - Controlling the spacing between elements.

  #### Considerations
  - Stack doesn't add any padding by default. If you want padding around your stacked elements, use \`base\` to apply the default padding.
  - When spacing becomes limited, Stack will always wrap children to a new line.

  #### Best practices
  - Use smaller gaps between small elements and larger gaps between big ones.
  - Maintain consistent spacing in stacks across all pages of your app.
  `,
  thumbnail: 'stack-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Stack',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Box',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/box',
    },
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/polaris-web-components/structure/grid',
    },
  ],
  defaultExample: {
    image: 'stack-default.png',
    codeblock: {
      title: '',
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
