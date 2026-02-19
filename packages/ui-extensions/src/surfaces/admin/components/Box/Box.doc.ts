import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Box';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/box.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for layout and grouping:** The component provides spacing, borders, and backgrounds for organizing content. When you need specific layout patterns like rows or columns, use [stack](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/stack) or [grid](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/grid) instead. The component works best as a general-purpose container.
- **Consider semantic alternatives first:** Before using the component, check whether a more specific component like [section](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/section) or [banner](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/feedback-and-status-indicators/banner) better describes your content's purpose. Semantic components provide better accessibility and clearer intent.
- **Design for different screen sizes:** Layouts that work on desktop might not work on mobile. Use responsive properties to adjust spacing and layout based on available space rather than creating fixed layouts.
- **Make interactive containers accessible:** When boxes contain interactive content or represent distinct regions, provide appropriate ARIA roles and labels so screen reader users can navigate and understand the interface structure.
- **Avoid excessive nesting:** Deep nesting of boxes creates complex DOM structures and makes styling harder to manage. Look for opportunities to simplify your layout or use more appropriate layout components.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the box component.',
      type: 'Box',
    },
    {
      title: 'Slots',
      description:
        'The box component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'BoxSlots',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
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
              'Demonstrates creating a simple container with padding, base background, border, and rounded corners to group and highlight product information.',
            codeblock: {
              title: 'Basic container',
              tabs: [
                {
                  code: './examples/basic-container.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-container.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates using a box with responsive padding to create an adaptable container for shipping information that can adjust to different screen or container sizes.',
            codeblock: {
              title: 'Responsive shipping notice',
              tabs: [
                {
                  code: './examples/responsive-shipping-notice.html',
                  language: 'html',
                  layout: 'fullWidth',
                },

                {
                  code: './examples/responsive-shipping-notice.jsx',
                  language: 'preview-jsx',
                  layout: 'fullWidth',
                },
              ],
            },
          },
          {
            description:
              'Shows how to use boxes with ARIA roles and visibility controls to create semantic, screen-reader-friendly status and informational messages.',
            codeblock: {
              title: 'Accessible status messages',
              tabs: [
                {
                  code: './examples/accessible-status-messages.html',
                  language: 'html',
                },

                {
                  code: './examples/accessible-status-messages.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates creating nested, hierarchical layouts using multiple boxes, showing how boxes can be combined to organize related content sections with different styling.',
            codeblock: {
              title: 'Nested hierarchical containers',
              tabs: [
                {
                  code: './examples/complex-merchant-dashboard-layout.html',
                  language: 'html',
                  layout: 'fullWidth',
                },

                {
                  code: './examples/complex-merchant-dashboard-layout.jsx',
                  language: 'preview-jsx',
                  layout: 'fullWidth',
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
