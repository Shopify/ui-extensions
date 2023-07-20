import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ResourceList',
  description:
    'A resource list displays a collection of objects of the same type, like products or customers.\n\nThis component is a work in progress and is subject to change. Please use this component with caution.',
  requires: '',
  thumbnail: 'resourcelist-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ResourceListProps',
      description: '',
      type: 'ResourceListProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'resourcelist-default.png',
    codeblock: {
      title: 'Add a ResourceList to your app',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ResourceList/examples/basic-ResourceList.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-ResourceList.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
