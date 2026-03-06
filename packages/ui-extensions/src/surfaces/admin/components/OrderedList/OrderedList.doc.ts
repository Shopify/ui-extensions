import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/OrderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/ordered-list.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use when order matters:** Ordered lists communicate sequence, priority, or ranking. Use them for step-by-step instructions, prioritized recommendations, or any content where the numbering provides meaningful information. When order doesn't matter, use [unordered list](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/unordered-list) instead.
- **Keep items parallel in structure:** Consistent grammar and structure across list items makes content easier to scan and understand. Mixing different writing styles within a list creates cognitive friction for readers.
- **Write concise items:** List items work best as brief, scannable content. When items become long or complex, they lose the clarity and efficiency that makes lists valuable. Consider restructuring long items into separate sections.
- **Limit nesting depth:** Nested lists help organize hierarchical content, but deep nesting becomes difficult to follow. When you find yourself nesting beyond two levels, the content structure might be too complex for a list format.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't support custom numbering styles (like Roman numerals, letters, or custom start numbers). All ordered lists use standard decimal numbering (1, 2, 3). If you need alternative numbering schemes, you'll need to create custom list styling.`,
    },
  ],
  definitions: [
    {
      title: 'Slots',
      description:
        'The ordered list component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-polaris-web-components#slots).',
      type: 'OrderedListSlots',
    },
    {
      title: listItemSharedContent.name,
      description: listItemSharedContent.description,
      type: 'ListItem',
    },
    {
      title: 'Slots',
      description:
        'The list item component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-polaris-web-components#slots).',
      type: 'ListItemSlots',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    description:
      'Create a numbered list of sequential steps. This example shows a basic ordered list with three setup instructions.',
    codeblock: {
      title: 'Add a numbered step list',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Nest ordered lists inside list items to break down complex steps into sub-steps. This example shows a product setup workflow where the first step has nested instructions.',
            codeblock: {
              title: 'Create nested steps with sub-instructions',
              tabs: [
                {
                  code: './examples/product-setup-instructions.html',
                  language: 'preview',
                  title: '',
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
