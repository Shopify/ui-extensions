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
    image: 'menu-default.png',
    description:
      'Add a dropdown menu of actions triggered by a button. This example shows a menu with three icon buttons including a critical delete action.',
    codeblock: {
      title: 'Add a basic actions menu',
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
              'Organize menu items into labeled groups so merchants can quickly find related actions. This example shows two sections with headings separating product actions from export options.',
            codeblock: {
              title: 'Organize items into sections',
              tabs: [
                {
                  code: './examples/menu-with-sections.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Mix link-based, standard, and disabled buttons in a single menu. This example shows a menu with a link that opens in a new tab, a disabled action, and a download link.',
            codeblock: {
              title: 'Add links and disabled items to a menu',
              tabs: [
                {
                  code: './examples/menu-with-links-and-disabled-items.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Combine sections with root-level items to separate grouped actions from standalone ones like a destructive action. This example shows two sections for customer management alongside a root-level delete button.',
            codeblock: {
              title: 'Mix sections with root-level actions',
              tabs: [
                {
                  code: './examples/customer-actions-menu.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Build a settings-style menu with multiple sections and a standalone action at the bottom. This example shows account and store settings sections with a root-level sign-out link.',
            codeblock: {
              title: 'Build a settings menu with sections',
              tabs: [
                {
                  code: './examples/settings-menu.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use an icon-only button as the menu trigger for a compact "more actions" pattern. This example shows a three-dot icon button that opens a menu with common product actions.',
            codeblock: {
              title: 'Trigger a menu from an icon-only button',
              tabs: [
                {
                  code: './examples/icon-only-trigger.html',
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
