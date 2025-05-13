import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/UnorderedList';

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
      sectionContent:
        '- Use UnorderedList when you need to present a list of related items or options.\n\n- Each item in the list should be wrapped in a ListItem component.\n\n- Keep list items concise and consistent in length when possible.\n\n- Use UnorderedList for navigation menus, feature lists, or any collection of related items.\n\n- Consider using UnorderedList when you want to present information in a clear, scannable format.',
    },
  ],
  related: [
    {
      subtitle: 'Related components',
      name: 'ListItem',
      url: 'listitem',
      type: 'component',
    },
    {
      subtitle: 'Related components',
      name: 'OrderedList',
      url: 'orderedlist',
      type: 'component',
    },
  ],
};

export default data;
