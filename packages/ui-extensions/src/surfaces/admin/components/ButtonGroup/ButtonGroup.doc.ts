import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ButtonGroup';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/buttongroup.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Group related actions:** Organize related calls to action together to create clear action hierarchies and help merchants understand available options.
- **Maintain visual hierarchy:** Use primary variants for main actions and secondary or tertiary variants for supporting actions to guide merchant attention.
- **Limit action count:** Avoid including too many buttons, which can overwhelm merchants and create decision paralysis.
- **Use segmented appearance for toggles:** Apply the segmented appearance for tightly related options like view switching or filter controls.
- **Separate destructive actions:** Position destructive actions appropriately and use critical tone to prevent accidental activation.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the button group component.',
      type: 'ButtonGroup',
    },
    {
      title: 'Slots',
      description:
        'The button group component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ButtonGroupSlots',
    },
  ],
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'inline',
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
              'Standard button group with cancel and primary action for form workflows.',
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
              'Action buttons for selected items with destructive option.',
            codeblock: {
              title: 'Bulk action buttons',
              tabs: [
                {
                  code: './examples/bulk-actions-in-data-tables.html',
                  language: 'html',
                },

                {
                  code: './examples/bulk-actions-in-data-tables.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Typical form completion actions with clear visual hierarchy.',
            codeblock: {
              title: 'Form action buttons',
              tabs: [
                {
                  code: './examples/form-action-buttons.html',
                  language: 'html',
                },

                {
                  code: './examples/form-action-buttons.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description: 'Icon-labeled buttons for common actions.',
            codeblock: {
              title: 'Buttons with icons',
              tabs: [
                {
                  code: './examples/toolbar-buttons-with-icons.html',
                  language: 'html',
                },

                {
                  code: './examples/toolbar-buttons-with-icons.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Tightly grouped buttons for view switching and filter options.',
            codeblock: {
              title: 'Segmented appearance',
              tabs: [
                {
                  code: './examples/segmented-appearance.html',
                  language: 'html',
                },

                {
                  code: './examples/segmented-appearance.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Confirmation dialog style with cancel option and destructive action.',
            codeblock: {
              title: 'Destructive actions pattern',
              tabs: [
                {
                  code: './examples/destructive-actions-pattern.html',
                  language: 'html',
                },

                {
                  code: './examples/destructive-actions-pattern.jsx',
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
