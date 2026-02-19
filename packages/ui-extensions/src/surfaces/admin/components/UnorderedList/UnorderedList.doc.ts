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
      sectionContent: `- **Use when order doesn't matter:** Unordered lists communicate a collection of related items without sequence or ranking. Use them for features, options, or benefits where the order isn't meaningful. When sequence matters, use [ordered list](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/ordered-list) instead.
- **Keep items parallel in structure:** Consistent grammar and structure across list items makes content easier to scan and understand. Mixing different writing styles within a list creates cognitive friction for readers.
- **Write concise items:** List items work best as brief, scannable content. When items become long or complex, they lose the clarity and efficiency that makes lists valuable. Consider restructuring long items into separate sections.
- **Limit nesting depth:** Nested lists help organize hierarchical content, but deep nesting becomes difficult to follow. When you find yourself nesting beyond two levels, the content structure might be too complex for a list format.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't support custom bullet styles (like checkmarks, arrows, or custom icons). All unordered lists use standard bullet markers. If you need alternative markers, you'll need to create custom list styling.`,
    },
  ],
  definitions: [
    {
      title: 'Slots',
      description:
        'The unordered list component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'UnorderedListSlots',
    },
    {
      title: listItemSharedContent.name,
      description: listItemSharedContent.description,
      type: 'ListItem',
    },
    {
      title: 'Slots',
      description:
        'The list item component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
