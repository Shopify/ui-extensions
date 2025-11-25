import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ScrollBox',
  description:
    'The `ScrollBox` component creates a scrollable area for content that exceeds container bounds. Use it to display large amounts of content within constrained spaces while maintaining usability.' +
    '\n\nThe component creates a defined scrollable area with customizable dimensions and scroll behavior, essential for constraining content height in modal dialogs and constrained layouts. It provides touch-optimized scrolling for POS devices with visual scroll indicators.' +
    '\n\n`ScrollBox` components provide scrollbar styling that matches the design system while ensuring sufficient contrast for visibility, with automatic thickness adjustments for touch-based scrolling versus mouse-based scrolling.',
  thumbnail: 'scrollbox-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `ScrollBox` component.',
      type: 'ScrollBox',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'scrollbox-default.png',
    description:
      'Create scrollable content areas using a `ScrollBox` component for content that exceeds container bounds. This example shows a basic scrollable area with customizable dimensions.',
    codeblock: {
      title: 'Create a scrollable content area',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Set clear dimensions:** Use percentage values for responsive layouts or pixels for exact dimensions.
- **Use for appropriate content:** Reserve \`ScrollBox\` for long lists or dynamic content that genuinely needs scrolling, not short content that fits within available space.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`ScrollBox\` automatically manage overflow behavior—manual overflow control beyond the component's built-in scrolling isn't available.
- Scroll behavior and styling are controlled by the POS design system—custom scroll bar styling or scroll physics modifications aren't supported.
- The component is optimized for touch-based scrolling in POS environments—complex scroll interactions or nested scrolling scenarios may not perform optimally.
`,
    },
  ],
  related: [],
};

export default data;
