import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Menu';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/menu.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Menu',
    },
    {
      title: 'Slots',
      description: '',
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
                    minHeight: '300px',
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
                    minHeight: '300px',
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
