import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PosBlock',
  description:
    'The `PosBlock` component creates a container to place content with an action button. Use it to display structured content within POS block targets.' +
    '\n\nThe component provides a standardized layout specifically designed for content blocks within POS detail views, with consistent padding, spacing, and optional action buttons. It integrates with the native POS design language, ensuring extension content feels cohesive with the core POS interface while maintaining clear content boundaries.' +
    '\n\n`PosBlock` components provide consistent interaction patterns for action buttons across different block types, ensuring merchants can predict button behavior and location regardless of the specific POS context.',
  thumbnail: 'pos-block-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `PosBlock` component.',
      type: 'PosBlock',
    },
    {
      title: 'QR Code',
      description:
        'The `PosBlock` component renders a QR code when the block is used within a receipt target.',
      type: 'QrCode',
    },
    {
      title: 'Slots',
      description:
        'The `PosBlock` component supports slots for additional content placement within the block. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'PosBlockSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'pos-block-default.png',
    description:
      'Create structured content blocks using a `PosBlock` component with optional action buttons. This example shows a basic block with content and an action button.',
    codeblock: {
      title: 'Create a content block with an action button',
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
