import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/OrderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'ordered-list-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'OrderedListProps',
    },
    {
      title: listItemSharedContent.name,
      description: listItemSharedContent.description,
      type: 'ListItemProps',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-ordered-list.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description:
      'Examples of additional ways to use the OrderedList component.',
    examples: [
      {
        description:
          'Display a sequential checklist. This example uses a two-step process that contrasts with the three-step cart flow in the default sample.',
        codeblock: {
          title: 'List numbered checkout steps',
          tabs: [
            {
              code: './examples/ordered-list-steps.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Use \`s-ordered-list\` when you need to present items in a specific sequence or order.
- Each item in the list should be wrapped in a \`s-list-item\` component.
- Keep list items concise and consistent in length when possible.
- Use \`s-ordered-list\` for step-by-step instructions, numbered procedures, or ranked items.
- Consider using \`s-ordered-list\` when the order of items is important for understanding.`,
    },
  ],
};

export default data;
