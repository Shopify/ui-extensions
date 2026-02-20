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
        'The ordered list component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
        'The list item component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ListItemSlots',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
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
              'Demonstrates a simple ordered list with three sequential steps.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows an ordered list with multiple steps in a workflow process.',
            codeblock: {
              title: 'Order processing steps',
              tabs: [
                {
                  code: './examples/order-processing-steps.html',
                  language: 'html',
                },

                {
                  code: './examples/order-processing-steps.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a nested ordered list with sub-steps within main steps.',
            codeblock: {
              title: 'Product setup instructions',
              tabs: [
                {
                  code: './examples/product-setup-instructions.html',
                  language: 'html',
                },

                {
                  code: './examples/product-setup-instructions.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Displays a complex nested list with multiple levels of sub-steps.',
            codeblock: {
              title: 'Fulfillment process',
              tabs: [
                {
                  code: './examples/fulfillment-process.html',
                  language: 'html',
                },

                {
                  code: './examples/fulfillment-process.jsx',
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
