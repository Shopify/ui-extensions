import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Authenticated Account API',
  description:
    "The Authenticated Account API provides read-only access to the logged-in customer's account information, including their customer ID and B2B company details. Use this API to identify the current customer, determine whether they're a B2B buyer, and personalize your extension based on their account context.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        "The `StandardApi` object provides the authenticated account data. Access the following properties on the `StandardApi` object to read the customer's account and company details.",
      type: 'Docs_Standard_AuthenticatedAccountApi',
    },
  ],
  defaultExample: {
    description:
      "Display a personalized greeting using the authenticated customer's identity. This example reads `shopify.authenticatedAccount.customer` to retrieve the customer ID and renders a welcome message.",
    codeblock: {
      title: 'Show a personalized greeting',
      tabs: [
        {
          code: '../examples/apis/authenticated-account-greeting.example.jsx',
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
          'Check whether the buyer is associated with a B2B company account. This example reads `shopify.authenticatedAccount.purchasingCompany` and conditionally displays the company ID and location ID when present.',
        codeblock: {
          title: 'Detect a B2B customer',
          tabs: [
            {
              code: '../examples/apis/authenticated-account-b2b.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Only render certain features when the customer is logged in. This example checks whether `shopify.authenticatedAccount.customer` is defined and conditionally shows a loyalty rewards section.',
        codeblock: {
          title: 'Gate features by authentication',
          tabs: [
            {
              code: '../examples/apis/authenticated-account-gate.example.jsx',
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
        '- **Use the customer ID as a stable key**: The `customer.id` is a globally unique GID that persists across sessions. Use it as a key for storing and retrieving app-specific data for the customer.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The Authenticated Account API provides only the customer ID. For more detailed customer data such as email, name, or phone, use the [Customer Account API](/docs/api/customer-account-ui-extensions/target-apis/account-apis/customer-account-api) to query the [GraphQL Customer Account API](/docs/api/customer).',
    },
  ],
  related: [],
};

export default data;
