import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Page',
  description: `
  Use \`s-page\` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements. 
  
  #### Useful for:
  - Creating flexible, responsive page layouts.
  `,
  requires: '',
  thumbnail: 'page-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Use as the outer wrapper of a page',
      type: 'Page',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PageSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  related: [
    {
      type: 'component',
      name: 'Section',
      url: '/docs/api/admin-extensions/components/structure/section',
    },
    {
      type: 'component',
      name: 'Box',
      url: '/docs/api/admin-extensions/components/structure/box',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'none',
        },
      ],
    },
  },
};

export default data;
