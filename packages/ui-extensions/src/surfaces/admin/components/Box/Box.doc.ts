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
      sectionContent: `- **Use for layout and grouping:** The component provides spacing, borders, and backgrounds for organizing content. When you need specific layout patterns like rows or columns, use [stack](/docs/api/{API_NAME}/{API_VERSION}/web-components/layout-and-structure/stack) or [grid](/docs/api/{API_NAME}/{API_VERSION}/web-components/layout-and-structure/grid) instead. The component works best as a general-purpose container.
- **Consider semantic alternatives first:** Before using the component, check whether a more specific component like [section](/docs/api/{API_NAME}/{API_VERSION}/web-components/layout-and-structure/section) or [banner](/docs/api/{API_NAME}/{API_VERSION}/web-components/feedback-and-status-indicators/banner) better describes your content's purpose. Semantic components provide better accessibility and clearer intent.
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
        'The box component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-web-components#slots).',
      type: 'BoxSlots',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
    description:
      'Create a container with padding and optional visual styling. This example shows a plain box and a styled box with background, border, and rounded corners.',
    codeblock: {
      title: 'Add a content container',
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
              'Use responsive padding values with container queries to adapt spacing based on available width. This example shows a shipping notice that adjusts its padding depending on the container size.',
            codeblock: {
              title: 'Adapt spacing with responsive padding',
              tabs: [
                {
                  code: './examples/responsive-shipping-notice.html',
                  language: 'preview',
                  title: '',
                  layout: 'fullWidth',
                },
              ],
            },
          },
          {
            description:
              'Set the `accessibilityRole` property to `status` to create a live region. When your code updates the text inside this box , screen readers automatically announce the new content. Use this for any content that updates dynamically.',
            codeblock: {
              title: 'Announce dynamic updates with a live region',
              tabs: [
                {
                  code: './examples/accessible-status-messages.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set the `accessibilityVisibility` property to `exclusive` to hide content visually while keeping it available to screen readers. This example shows a box with pricing context that only assistive technology users can access.',
            codeblock: {
              title: 'Add screen-reader-only content',
              tabs: [
                {
                  code: './examples/screen-reader-only-content.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Nest boxes to create hierarchical layouts with distinct visual sections. This example shows an inventory status section and a product sales section organized as cards within a vertical stack.',
            codeblock: {
              title: 'Build nested card layouts',
              tabs: [
                {
                  code: './examples/complex-merchant-dashboard-layout.html',
                  language: 'preview',
                  title: '',
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
