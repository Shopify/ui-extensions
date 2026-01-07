import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ResourceList',
  description:
    'Displays a filterable collection of objects of the same type, like products or customers. ResourceList should help merchants find an object and navigate to a full-page representation of it.',
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
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    codeblock: {
      title: 'Basic ResourceList',
      tabs: [
        {
          code: './examples/basic-resourcelist.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
