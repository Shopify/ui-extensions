import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Page';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/page.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Always provide a title that describes the current page
- Include breadcrumbs when the page is part of a flow
- Include page actions in the header only if they are relevant to the entire page
- Include no more than one primary action and 3 secondary actions per page
- Don't include any actions at the bottom of the page`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The \`inlineSize\` property only accepts \`small\`, \`base\` (default), or \`large\` values
- Breadcrumb actions only support link and button components
- The \`aside\` slot is only visible when \`inlineSize\` is set to \`large\``,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the page component.',
      type: 'Page',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'PageSlots',
    },
  ],
  defaultExample: {
    description:
      'Create a consistent page structure with automatic spacing. This example shows a heading with organized content sections.',
    codeblock: {
      title: 'Organize content with sections',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'none',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'none',
        },
      ],
    },
  },
  related: [],
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Create a focused layout for forms and simple workflows. This example uses the small inlineSize setting for narrower content.',
            codeblock: {
              title: 'Use small width for forms',
              tabs: [
                {
                  code: './examples/small-inline-size-for-focused-content.html',
                  language: 'preview',
                  layout: 'none',
                },
                {
                  code: './examples/small-inline-size-for-focused-content.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Display data-rich content like dashboards or analytics. This example uses the large inlineSize setting for wider layouts.',
            codeblock: {
              title: 'Use large width for dashboards',
              tabs: [
                {
                  code: './examples/large-inline-size-for-wide-content.html',
                  language: 'preview',
                  layout: 'none',
                },
                {
                  code: './examples/large-inline-size-for-wide-content.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Help merchants understand where they are in your app. This example shows a breadcrumb link back to a parent page.',
            codeblock: {
              title: 'Add breadcrumb navigation',
              tabs: [
                {
                  code: './examples/page-with-breadcrumbs-and-title.html',
                  language: 'preview',
                  layout: 'none',
                },
                {
                  code: './examples/page-with-breadcrumbs-and-title.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                },
              ],
            },
          },
          {
            description:
              'Provide quick access to common operations from the page header. This example shows primary and secondary action buttons.',
            codeblock: {
              title: 'Add page actions',
              tabs: [
                {
                  code: './examples/page-with-secondary-actions.html',
                  language: 'preview',
                  layout: 'none',
                },
                {
                  code: './examples/page-with-secondary-actions.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Complete workflow',
        examples: [
          {
            description:
              'Combine all page features for complex editing workflows. This example shows breadcrumbs, actions, form content, and an aside panel working together.',
            codeblock: {
              title: 'Edit page with all slots',
              tabs: [
                {
                  code: './examples/edit-page-with-all-slots.html',
                  language: 'preview',
                  layout: 'none',
                  customStyles: {
                    minHeight: '500px',
                  },
                },
                {
                  code: './examples/edit-page-with-all-slots.jsx',
                  language: 'preview-jsx',
                  layout: 'none',
                  customStyles: {
                    minHeight: '500px',
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
