import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Menu';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/menu.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Reserve for secondary actions:** Place primary actions directly in the UI (like **Save** in the page header). Use menus for less frequent or destructive actions (like **Archive**, **Duplicate**, or **Export data**) that shouldn't take up permanent space.
- **Write action-oriented labels:** Use the \`{verb}+{noun}\` format: **Edit details**, **Export as CSV**, **Duplicate product**, **Archive order**. Never use vague labels like **Options**, **More**, or **Settings**.
- **Group related actions with sections:** When you have 4+ menu items, organize into sections with headings: group **Edit details**, **Duplicate product** under **Manage**, and **Archive product**, **Delete product** under **Danger zone**.
- **Use icons to reinforce meaning:** Add icons to menu items to provide visual recognition: use an edit icon for **Edit**, trash icon for **Delete**, or download icon for **Export**. Icons should clarify, not replace, text labels.
- **Only disable temporarily unavailable actions:** Use disabled items when an action's contextually unavailable (like **Refund order** when already refunded). If an action's never available, remove it from the menu entirely.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Menus automatically reposition to stay within the viewport boundaries, but in extremely constrained spaces (like narrow mobile screens or small modals), the menu might partially overflow or be cut off.
- While there's no hard technical limit on menu items, menus with more than 10-12 items become difficult to scan. Performance remains acceptable up to ~50 items, but beyond this, consider pagination, search, or alternative UI patterns.
- The component doesn't support nested submenus (like cascading dropdowns). All menu items must be at a single level, organized into sections if needed.
- When navigating with arrow keys, focus moves sequentially through all items regardless of section boundaries. Section headings aren't focusable and serve only as visual separators.
- The menu renders in a popover layer with a specific z-index. If placed within containers that have their own stacking contexts (like modals, sticky headers, or elements with transforms), the menu might appear behind other elements or clip unexpectedly.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the menu component.',
      type: 'Menu',
    },
    {
      title: 'Slots',
      description:
        'The menu component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'MenuSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'alignStart',
          customStyles: {
            minHeight: '300px',
          },
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'alignStart',
          customStyles: {
            minHeight: '300px',
          },
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
              'Demonstrates a simple menu with basic action buttons and shows how to link it to a trigger button.',
            codeblock: {
              title: 'Basic Menu',
              tabs: [
                {
                  code: './examples/basic-menu.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-menu.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Illustrates a menu with icons for each action, providing visual context for different menu items and showing how to use the caret-down icon on the trigger button.',
            codeblock: {
              title: 'Menu with Icons',
              tabs: [
                {
                  code: './examples/menu-with-icons.html',
                  language: 'html',
                },

                {
                  code: './examples/menu-with-icons.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Shows how to organize menu items into logical sections with headings, helping to group related actions and improve menu readability.',
            codeblock: {
              title: 'Menu with Sections',
              tabs: [
                {
                  code: './examples/menu-with-sections.html',
                  language: 'html',
                },

                {
                  code: './examples/menu-with-sections.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
              ],
            },
          },
          {
            description:
              "Demonstrates a menu with a mix of link-based buttons, standard buttons, and a disabled button, showcasing the menu's flexibility in handling different interaction states.",
            codeblock: {
              title: 'Menu with Links and Disabled Items',
              tabs: [
                {
                  code: './examples/menu-with-links-and-disabled-items.html',
                  language: 'html',
                },

                {
                  code: './examples/menu-with-links-and-disabled-items.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              "Presents a comprehensive menu showing how to create sections with different action groups and include a critical action at the menu's root level.",
            codeblock: {
              title: 'Actions menu with sections',
              tabs: [
                {
                  code: './examples/customer-actions-menu.html',
                  language: 'html',
                },

                {
                  code: './examples/customer-actions-menu.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Illustrates a complex menu with nested sections, demonstrating how to organize multiple related actions with icons.',
            codeblock: {
              title: 'Menu with nested sections',
              tabs: [
                {
                  code: './examples/settings-menu.html',
                  language: 'html',
                },

                {
                  code: './examples/settings-menu.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
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
