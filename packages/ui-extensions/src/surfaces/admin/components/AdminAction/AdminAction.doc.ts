import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminAction',
  description:
    'Use `s-admin-action` to configure a primary and secondary action and title. Use of this component is required in order to use Admin action extensions.',
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminaction.png',
  isVisualComponent: true,
  isOneColumnLayout: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AdminActionProps',
    },
    {
      title: 'Slots',
      description: '',
      type: 'AdminActionSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Other',
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminaction-example.png',
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
      name: 'AdminBlock',
      url: '/docs/api/admin-extensions/polaris-web-components/other/adminblock',
    },
  ],
};

export default data;
