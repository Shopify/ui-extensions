import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    'The `Stack` component organizes elements horizontally or vertically along the block or inline axis. Use it to structure layouts, group related components, or control spacing between elements with flexible alignment options.' +
    '\n\nThe component simplifies layout creation by automatically managing spacing between child elements through gap properties, eliminating the need for manual margin management. It supports both horizontal and vertical arrangements, flexible alignment options, and wrapping behavior, making it the foundation for building consistent, responsive layouts throughout POS extensions.' +
    '\n\n`Stack` components support responsive gap values that automatically adjust spacing based on screen size, ensuring layouts remain visually balanced and maintain proper element separation across different devices.',
  thumbnail: 'stack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Stack` component.',
      type: 'Stack',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'stack-default.png',
    description:
      'Organize elements horizontally or vertically using a `Stack` component with automatic spacing. This example shows a basic stack with gap spacing between child elements.',
    codeblock: {
      title: 'Organize elements with a stack',
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
