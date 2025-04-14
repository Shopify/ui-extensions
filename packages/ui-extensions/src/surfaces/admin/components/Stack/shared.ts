const shared = {
  name: 'Stack',
  description:
    "`s-stack` structures layout elements along the [block or inline axes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) of the page. It is useful for organizing buttons, creating layouts that adjust to screen size, and controlling spacing between elements.\n\nIt's important to note that Stack does not include any padding by default. If you need padding around your stacked elements, use `base` to apply the default padding. When spacing becomes limited, Stack will always wrap children to a new line.\n\nWhen using `s-stack`, use smaller gaps between small elements and larger gaps between big ones. Maintain a consistent spacing in stacks across all pages of your app.",
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
      url: '/docs/api/admin-extensions/components/structure/box',
    },
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/components/structure/grid',
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
