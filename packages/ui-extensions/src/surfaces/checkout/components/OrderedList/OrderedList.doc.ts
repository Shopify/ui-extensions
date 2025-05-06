import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'OrderedList',
  description:
    '`s-ordered-list` displays a set of related text-only content beginning with a number.',
  isVisualComponent: true,
  thumbnail: 'orderedlist-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'OrderedListProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'orderedlist-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-orderedlist.example.html',
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
        '- Use OrderedList when you need to present items in a specific sequence or order.\n\n- Each item in the list should be wrapped in a ListItem component.\n\n- Keep list items concise and consistent in length when possible.\n\n- Use OrderedList for step-by-step instructions, numbered procedures, or ranked items.\n\n- Consider using OrderedList when the order of items is important for understanding.',
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
      name: 'UnorderedList',
      url: 'unorderedlist',
      type: 'component',
    },
  ],
};

export default data;
