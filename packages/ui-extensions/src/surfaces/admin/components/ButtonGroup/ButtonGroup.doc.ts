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
        'The button group component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-polaris-web-components#slots).',
      type: 'ButtonGroupSlots',
    },
  ],
  defaultExample: {
    image: 'buttongroup-default.png',
    description:
      'Group related buttons together with a primary action and secondary options. This example shows a button group with a save button and a cancel button.',
    codeblock: {
      title: 'Group a primary and secondary action',
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
              'Present multiple secondary actions for operating on selected items. This example shows archive, export, and delete buttons grouped together for bulk operations.',
            codeblock: {
              title: 'Add bulk action buttons',
              tabs: [
                {
                  code: './examples/bulk-actions-in-data-tables.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add icons to grouped buttons to help merchants identify each action. This example shows duplicate, archive, and delete buttons with icons.',
            codeblock: {
              title: 'Add icons to grouped buttons',
              tabs: [
                {
                  code: './examples/toolbar-buttons-with-icons.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Remove the gap between buttons to create a segmented control for toggling between views or options. This example shows day, week, and month buttons joined together with no spacing.',
            codeblock: {
              title: 'Create a segmented button group',
              tabs: [
                {
                  code: './examples/segmented-appearance.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Pair a cancel button with a critical action for destructive confirmation flows. This example shows a cancel and delete button grouped together for a confirmation dialog.',
            codeblock: {
              title: 'Confirm a destructive action',
              tabs: [
                {
                  code: './examples/destructive-actions-pattern.html',
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
