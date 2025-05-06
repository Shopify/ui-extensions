import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ListItem',
  description:
    'List items are used as children of the `UnorderedList` or `OrderedList` component.',
  requires: '',
  thumbnail: 'listitem-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ListItemProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'listitem-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-listitem.example.html',
          language: 'html',
        },
      ],
    },
  },
  related: [
    {
      name: 'UnorderedList',
      subtitle: 'Component',
      url: 'unorderedlist',
      type: 'Component',
    },
    {
      name: 'OrderedList',
      subtitle: 'Component',
      url: 'orderedlist',
      type: 'Component',
    },
  ],
};

export default data;
