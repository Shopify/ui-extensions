import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ResourceItem',
  description:
    'ResourceItem is used as children of the `ResourceList` component.\n\nThis component is a work in progress and is subject to change. Please use this component with caution.',
  requires: '',
  thumbnail: 'resourceitem-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ResourceItemProps',
      description: '',
      type: 'ResourceItemProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'resourceitem-default.png',
    codeblock: {
      title: 'Add a ResourceItem to your app',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ResourceItem/examples/basic-resourceItem.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-ResourceItem.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
