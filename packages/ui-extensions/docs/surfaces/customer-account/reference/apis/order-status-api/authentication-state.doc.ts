import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Authentication State API',
  description:
    "The Authentication State API provides the buyer's current authentication level in customer accounts. Use this API to determine whether the buyer is fully logged in or viewing the page through a pre-authenticated link, such as from an order confirmation email.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the authentication state. Access the following property on the `OrderStatusApi` object to determine how the buyer accessed the order status page.',
      type: 'Docs_OrderStatus_AuthenticationStateApi',
    },
  ],
  defaultExample: {
    description:
      'Display different UI depending on whether the buyer is fully authenticated or pre-authenticated. This example reads `shopify.authenticationState` and renders detailed order actions for authenticated buyers or an informational banner for others.',
    codeblock: {
      title: 'Show conditional content by auth state',
      tabs: [
        {
          code: '../../examples/apis/authentication-state-conditional.example.jsx',
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
          'Detect pre-authenticated buyers and encourage them to log in for a richer experience. This example checks `shopify.authenticationState` and displays a login prompt with a button that calls `shopify.requireLogin()`.',
        codeblock: {
          title: 'Prompt for login',
          tabs: [
            {
              code: '../../examples/apis/authentication-state-prompt.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Show different levels of detail based on the buyer's authentication state. This example renders the full shipping address for fully authenticated buyers and only the city and country for pre-authenticated buyers.",
        codeblock: {
          title: 'Display data based on auth level',
          tabs: [
            {
              code: '../../examples/apis/authentication-state-data.example.jsx',
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
        '- **Combine with Require Login API**: Use `authenticationState` to check the current state and [`requireLogin()`](/docs/api/customer-account-ui-extensions/target-apis/account-apis/require-login-api) to trigger a login prompt when full authentication is needed.\n- **Degrade gracefully for pre-authenticated users**: Design your extension to show useful but non-sensitive content for pre-authenticated users, and offer a login prompt for more detailed information.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The authentication state is read-only. You can't change the buyer's authentication level directly — use the [Require Login API](/docs/api/customer-account-ui-extensions/target-apis/account-apis/require-login-api) to prompt them to log in.\n- Pre-authenticated buyers may have limited access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data), which can cause some API properties to return `undefined`.",
    },
  ],
  related: [],
};

export default data;
