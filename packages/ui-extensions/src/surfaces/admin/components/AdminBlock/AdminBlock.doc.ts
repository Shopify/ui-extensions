import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminBlock',
  description:
    '`s-admin-block` is similar to the AdminBlock, providing a deeper integration with the container your UI is rendered into. However, this only applies to Block Extensions which render inline on a resource page.',
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminblock.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AdminBlockProps',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Other',
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminblock-example.png',
    codeblock: {
      title: '',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.tsx',
          language: 'jsx',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'Adminaction',
      url: '/docs/api/admin-extensions/polaris-web-components/other/adminaction',
    },
  ],
};

export default data;
