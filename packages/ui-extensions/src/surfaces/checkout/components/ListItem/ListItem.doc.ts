import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/ListItem';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
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
