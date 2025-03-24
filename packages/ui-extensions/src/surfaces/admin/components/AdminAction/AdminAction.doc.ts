import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminAction',
  description:
    'AdminAction is a component used by Admin action extensions to configure a primary and secondary action and title. Use of this component is required in order to use Admin action extensions.',
  requires: '',
  thumbnail: 'adminaction-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'AdminActionProps',
      description: '',
      type: 'AdminActionProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'adminaction-default.png',
    codeblock: {
      title: 'Default Example',
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
      url: '/docs/api/admin-extensions/components/other/adminblock',
    },
  ],
};

export default data;
