import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminPrintAction',
  description:
    '`s-admin-print-action` is a component used by admin print action extensions to denote a URL to print. Admin print action extensions require the use of this component.',
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminprintaction.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AdminPrintActionProps',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Settings and templates',
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
  related: [],
};

export default data;
