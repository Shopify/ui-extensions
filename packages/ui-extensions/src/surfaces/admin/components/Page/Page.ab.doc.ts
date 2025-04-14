import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Page',
  description: `
  Use \`s-page\` as the main layout container for placing content in your app. Page comes with preset styles that match the Admin design and automatically adds spacing between elements. This means you don't need to wrap your content inside \`s-grid\`, \`s-stack\`, or \`s-box\`.
  
  #### Useful for:
  - Defining the content that lives inside the page.
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
      title: 'Default Example',
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
