const shared = {
  name: 'Box',
  description:
    'Use `s-box` as your foundational structural element for composing UI. It can be styled using predefined tokens. Use it to build your layout. \n\n Box is useful for wrapping and isolating content with specific styling, such as background color, border or padding. It can also help nest other components. In general, avoid using Box as a layout element. Instead, rely on [`s-stack`](/docs/api/app-bridge-library/experimental-components/structure/stack) and [`s-grid`](/docs/api/app-bridge-library/experimental-components/structure/grid) for layout.',
  requires: '',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Box',
    },
  ],
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Stack',
      url: '/docs/api/admin-extensions/components/structure/stack',
    },
    {
      type: 'component',
      name: 'Grid',
      url: '/docs/api/admin-extensions/components/structure/grid',
    },
    {
      type: 'component',
      name: 'Section',
      url: '/docs/api/admin-extensions/components/structure/section',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
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
