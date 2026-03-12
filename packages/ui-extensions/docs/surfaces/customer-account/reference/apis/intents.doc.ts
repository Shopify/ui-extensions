import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Intents API',
  overviewPreviewDescription:
    'The API for invoking Shopify intents to request workflows.',
  description: `The Intents API provides a way to invoke existing customer account workflows for managing buyer information.`,
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Replace payment method with object syntax',
      tabs: [
        {
          code: '../examples/apis/intents.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'invoke',
      description: `The \`invoke\` API is a function that accepts either a string query or an options object describing the intent to invoke and returns a Promise that resolves to an activity handle for the workflow.

## Intent format

Intents are invoked using a string query format: \`\${action}:\${type},\${value}\`

Where:
- \`action\` - The operation to perform (\`create\`, \`edit\` or \`open\`)
- \`type\` - The resource type (e.g., \`shopify/SubscriptionContract\`)
- \`value\` - The resource identifier

## Supported resources

### Subscription contract
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`open\` | \`shopify/SubscriptionContract\` | \`gid://shopify/SubscriptionContract/{id}\` | \`{ field: 'paymentMethod' }\` |`,
      type: 'Intents',
    },
    {
      title: 'IntentAction',
      description: `Supported actions that can be performed on resources.
- \`create\`: Opens a creation workflow for a new resource
- \`open\`: Opens a workflow for an existing resource (requires \`value\` parameter)`,
      type: 'IntentAction',
    },
    {
      title: 'IntentQuery',
      description: `Structured description of an intent to invoke. Use this object form when programmatically composing an intent at runtime.`,
      type: 'IntentQuery',
    },
    {
      title: 'IntentQueryOptions',
      description: `Options for invoking intents when using the query string format.`,
      type: 'IntentQueryOptions',
    },
    {
      title: 'IntentActivity',
      description: `Activity handle for tracking intent workflow progress.`,
      type: 'IntentActivity',
    },
    {
      title: 'IntentResponse',
      description: `Response object returned when the intent workflow completes.`,
      type: 'IntentResponse',
    },
  ],
  examples: {
    description: 'Intents for each Shopify resource type',
    examples: [
      {
        description:
          'Replace the payment method on an active subscription contract. Opens a modal with vaulted cards.',
        codeblock: {
          title: 'Replace payment method with string syntax',
          tabs: [
            {
              code: '../examples/apis/intents.string.example.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
