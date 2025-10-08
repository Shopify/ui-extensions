import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ButtonGroup';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/buttongroup.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ButtonGroup',
    },
    {
      title: 'Slots',
      description: '',
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
