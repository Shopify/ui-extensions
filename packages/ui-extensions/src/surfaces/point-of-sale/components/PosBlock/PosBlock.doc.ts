import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'POS block',
  description:
    'The POS block component creates a container to place content with an action button. Use it to display structured content within POS block targets.' +
    '\n\nThe component provides a standardized layout specifically designed for content blocks within POS detail views, with consistent padding, spacing, and optional action buttons.',
  thumbnail: 'pos-block-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the POS block component.',
      type: 'PosBlock',
    },
    {
      title: 'QR Code',
      description:
        'The POS block component renders a QR code when the block is used within a receipt target.',
      type: 'QrCode',
    },
    {
      title: 'Slots',
      description:
        'The POS block component supports slots for additional content placement within the block. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'PosBlockSlots',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'pos-block-default.png',
    description:
      'Create structured content blocks using a POS block component with optional action buttons. This example shows a basic block with content and an action button.',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Provide descriptive headings:** If you don't specify a heading, the system uses your extension's description, so ensure it's meaningful and concise.
- **Place important actions in secondary-actions slot:** Include only the most relevant actions directly related to your block's content.
- **Limit secondary actions:** To maintain clean, focused interfaces that don't overwhelm the existing POS workflow, use only one secondary action element in each block.
`,
    },
  ],
  related: [],
};

export default data;
