const shared = {
  name: 'Grid',
  description:
    'Use `s-grid` to create responsive layouts with consistent spacing. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout). Grid helps organize content into columns and rows with proper alignment and spacing. \n\n Grid does not include any padding by default. If you need padding around your grid, use `base` to apply the default padding. Grid will allow children to overflow unless template rows/columns are properly set.',
  thumbnail: 'grid-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Grid',
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
  ],
  defaultExample: {
    image: 'grid-default.png',
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
