import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ResourceItem',
  description:
    'Resource items represent specific objects within a collection, such as products or orders. They provide contextual information on the resource type and link to the object detail page. A ResourceItem should be rendered within a ResourceList.',
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
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    codeblock: {
      title: 'Basic ResourceItem',
      tabs: [
        {
          code: './examples/basic-resourceitem.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
