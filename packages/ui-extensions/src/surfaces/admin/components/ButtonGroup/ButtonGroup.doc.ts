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
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Action buttons for selected table items with destructive option.',
            codeblock: {
              title: 'Bulk actions in data tables',
              tabs: [
                {
                  code: './examples/bulk-actions-in-data-tables.html',
                  language: 'preview',
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
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Icon-labeled buttons for common product management actions.',
            codeblock: {
              title: 'Toolbar buttons with icons',
              tabs: [
                {
                  code: './examples/toolbar-buttons-with-icons.html',
                  language: 'preview',
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
                  language: 'preview',
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
                  language: 'preview',
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
