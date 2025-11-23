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
  related: [],
};

export default data;
