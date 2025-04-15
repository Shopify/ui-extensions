const shared = {
  name: 'Grid',
  description: `
  Use \`s-grid\` to organize your content in a matrix of rows and columns. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout). 
  
  #### Useful for:
  - Organizing content into a grid-like layout with columns and rows with consistent alignment and spacing.
  - Creating responsive layouts with consistent spacing.
  
  #### Considerations
  - Grid does not include any padding by default. If you need padding around your grid, use \`base\` to apply the default padding. 
  - Grid will allow children to overflow unless template rows/columns are properly set.
  - Grid will always wrap children to a new line. If you need to control the wrapping behavior, use \`s-stack\` or \`s-box\`.
 `,

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
