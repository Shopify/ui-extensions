import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/UnorderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/unordered-list.png',
  isVisualComponent: true,
  definitions: [
    {
      title: listItemSharedContent.name,
      description: listItemSharedContent.description,
      type: 'ListItem',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ListItemSlots',
    },
  ],
  defaultExample: {
    image: 'unordered-list-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default data;
