import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Attributes API',
  description:
    'The Attributes API provides the custom key-value pairs that the buyer attached to the order during cart or checkout. Use this API to read custom order data like gift messages or delivery instructions.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read all custom attributes from the order and display each key-value pair. This example uses the `useAttributes` hook and iterates over the attribute array.',
    codeblock: {
      title: 'Display custom attributes',
      tabs: [
        {
          code: '../../examples/apis/attributes-display-custom-attributes.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/attributes-display-custom-attributes.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides custom attributes from the order. Access the following properties on the `OrderStatusApi` object to read attribute data.',
      type: 'Docs_OrderStatus_AttributesApi',
    },
    {
      title: 'useAttributes',
      description:
        'Returns the custom attributes attached to the order as an array of key-value pairs. The value is `undefined` if no attributes were provided.',
      type: 'UseAttributesGeneratedType',
    },
    {
      title: 'useAttributeValues',
      description:
        'Returns the values for the specified attribute keys as an array. Pass one or more keys to retrieve only the attributes you need.',
      type: 'UseAttributeValuesGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Use `useAttributeValues` for known keys**: When you need a specific attribute, use `useAttributeValues` instead of filtering the full list.\n- **Handle missing attributes gracefully**: Attributes are optional. The list may be empty or `undefined` if the buyer didn't add any custom data.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Attribute values are always strings. If you stored structured data during checkout, you need to parse it in your extension.\n- There's no metadata about who set an attribute. You can't determine whether an attribute was set by the buyer, a theme, or another extension.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Look up a specific attribute by key and display its value in a banner. This example uses `useAttributeValues` to retrieve a single attribute without filtering the full list.',
        codeblock: {
          title: 'Find a specific attribute',
          tabs: [
            {
              code: '../../examples/apis/attributes-find-specific-attribute.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/attributes-find-specific-attribute.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Read the delivery instructions attribute and display it as a banner. This example uses `useAttributeValues` to look up a known key and conditionally renders the result.',
        codeblock: {
          title: 'Show delivery instructions',
          tabs: [
            {
              code: '../../examples/apis/attributes-show-delivery-instructions.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/attributes-show-delivery-instructions.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
