import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/UnorderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'unorderedlist-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'UnorderedListProps',
    },
    {
      title: listItemSharedContent.name,
      description: listItemSharedContent.description,
      type: 'ListItemProps',
    },
  ],
  defaultExample: {
    image: 'unorderedlist-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-unorderedlist.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
        - Use \`s-unordered-list\` when you need to present a list of related items or options.
        - Each item in the list should be wrapped in a \`s-list-item\` component.
        - Keep list items concise and consistent in length when possible.
        - Use \`s-unordered-list\` for navigation menus, feature lists, or any collection of related items.
        - Consider using \`s-unordered-list\` when you want to present information in a clear, scannable format.
      `,
    },
  ],
};

export default data;
