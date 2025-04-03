const shared = {
  name: 'Box',
  description:
    'Use `s-box` as your foundational structural element for composing UI. It can be styled using predefined tokens. Use it to build your layout.',
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
