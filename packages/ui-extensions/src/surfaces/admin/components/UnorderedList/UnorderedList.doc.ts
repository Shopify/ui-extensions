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
      title: 'Slots',
      description: '',
      type: 'UnorderedListSlots',
    },
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
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'A standard unordered list presenting a sequential setup process for an online store, using consistent list styling.',
            codeblock: {
              title: 'Store setup checklist',
              tabs: [
                {
                  code: './examples/store-setup-checklist.html',
                  language: 'html',
                },

                {
                  code: './examples/store-setup-checklist.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
