import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Note API',
  description:
    'The Note API provides read-only access to the optional text note that the buyer left for the merchant during checkout. Use this API to display delivery instructions, special requests, or other freeform messages the buyer included with their order.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        "The `OrderStatusApi` object provides the note that the customer left during checkout. Access the following properties on the `OrderStatusApi` object to read the customer's note.",
      type: 'Docs_OrderStatus_NoteApi',
    },
  ],
  defaultExample: {
    description:
      'Show the note that the customer left for the merchant during checkout. This example reads `shopify.note` and displays the text, with a fallback message when no note is present.',
    codeblock: {
      title: 'Display the order note',
      tabs: [
        {
          code: '../../examples/apis/note-display.example.jsx',
          language: 'jsx',
          title: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Only render a note section when the buyer left a note on the order. This example checks whether `shopify.note` is defined and returns `null` when no note exists, avoiding empty UI.',
        codeblock: {
          title: 'Render a note conditionally',
          tabs: [
            {
              code: '../../examples/apis/note-conditional.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Show the order note in a styled banner component for visual emphasis. This example reads `shopify.note` and wraps the text in an `s-banner` with an informational status.',
        codeblock: {
          title: 'Display a note in a banner',
          tabs: [
            {
              code: '../../examples/apis/note-banner.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Only a single note is supported per order. There's no way to retrieve multiple notes or a note history.",
    },
  ],
  related: [],
};

export default data;
