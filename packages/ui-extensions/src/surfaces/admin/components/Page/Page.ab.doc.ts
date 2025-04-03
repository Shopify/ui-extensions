import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Page',
  description:
    'Use `s-page` as a container for your page content when creating your app. The `s-page` component handles things like the default spacing and sizing of your app.',
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
  category: 'Experimental Components',
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
