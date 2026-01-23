import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/UnorderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/unordered-list.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use to break up related content and improve scannability
- Phrase items consistently (start each with a noun or verb)
- Start each item with a capital letter
- Don't use commas or semicolons at the end of lines`,
    },
  ],
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
              'A standard unordered list with nested items demonstrating hierarchical content structure.',
            codeblock: {
              title: 'Unordered list with nested items',
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
