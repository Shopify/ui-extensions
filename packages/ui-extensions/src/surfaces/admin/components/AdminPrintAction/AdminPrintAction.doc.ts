import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminPrintAction',
  description:
    '`s-admin-print-action` is a component used by admin print action extensions to denote a URL to print. Admin print action extensions require the use of this component.',
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminprintaction.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AdminPrintActionProps',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Other',
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminprintaction-example.png',
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
      name: 'AdminAction',
      url: '/docs/api/admin-extensions/polaris-web-components/other/adminaction',
    },
    {
      type: 'component',
      name: 'AdminBlock',
      url: '/docs/api/admin-extensions/polaris-web-components/other/adminblock',
    },
  ],
};

export default data;
