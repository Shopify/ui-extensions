import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Attributes API',
  description:
    'The Attributes API provides read-only access to the custom key-value pairs attached to the cart or checkout. Use this API to read attributes set by buyers, themes, or other extensions during checkout, such as delivery instructions or gift messages.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the custom key-value pairs attached to the order. Access the following properties on the `OrderStatusApi` object to read attributes such as delivery instructions, gift messages, or other information the buyer provided during checkout.',
      type: 'Docs_OrderStatus_AttributesApi',
    },
  ],
  defaultExample: {
    description:
      'Find and display delivery instructions from the order attributes. This example reads `shopify.attributes` and uses `Array.find()` to locate a specific attribute by key, then renders the value in a banner.',
    codeblock: {
      title: 'Display delivery instructions',
      tabs: [
        {
          code: '../../examples/apis/attributes-delivery-instructions.example.jsx',
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
          'Display a gift message the buyer attached to their order. This example searches the attributes array for a `giftMessage` key and conditionally renders the message when present.',
        codeblock: {
          title: 'Show a gift message',
          tabs: [
            {
              code: '../../examples/apis/attributes-gift-message.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Read and format a preferred delivery date from the order attributes. This example finds the `preferredDeliveryDate` attribute and formats it using `Date.toLocaleDateString()` for display.',
        codeblock: {
          title: 'Process custom checkout data',
          tabs: [
            {
              code: '../../examples/apis/attributes-custom-data.example.jsx',
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
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Look up attributes by key**: Attributes are returned as an array of key-value pairs. Use `Array.find()` to look up a specific attribute by its `key` property.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Attribute values are always strings. If you stored structured data during checkout, you need to parse it in your extension.\n- There's no metadata about who set an attribute. You can't determine whether an attribute was set by the buyer, a theme, or another extension.",
    },
  ],
  related: [],
};

export default data;
