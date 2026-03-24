import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Authentication State API',
  description:
    "The Authentication State API provides the buyer's current authentication status in customer accounts. Use this API to conditionally render content based on whether the buyer is fully logged in or viewing through a tokenized link.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      "Read the buyer's authentication state and display whether they're fully authenticated or pre-authenticated. This example uses the `useAuthenticationState` hook to render the current status as text.",
    codeblock: {
      title: 'Check authentication state',
      tabs: [
        {
          code: '../../examples/apis/authentication-state-check-auth-state.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/authentication-state-check-auth-state.example.ts',
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
        "The `OrderStatusApi` object provides the buyer's authentication state. Access the following properties on the `OrderStatusApi` object to read authentication data.",
      type: 'Docs_OrderStatus_AuthenticationStateApi',
    },
    {
      title: 'useAuthenticationState',
      description:
        "Returns the buyer's authentication state in customer accounts. Returns `'fully_authenticated'` or `'pre_authenticated'`.",
      type: 'UseAuthenticationStateGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Gate sensitive actions behind full authentication**: Use the authentication state to restrict actions like editing order details to fully authenticated buyers.\n- **Provide fallback content for pre-authenticated buyers**: Pre-authenticated buyers access the page through a tokenized link. Show limited information and offer a login prompt for additional actions.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The authentication state is read-only. You can't change the buyer's authentication level directly \u2014 use the [Require Login API](/docs/api/customer-account-ui-extensions/target-apis/account-apis/require-login-api) to prompt them to log in.\n- Pre-authenticated buyers may have limited access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data), which can cause some API properties to return `undefined`.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Show different content depending on whether the buyer is fully authenticated or pre-authenticated. This example uses `useAuthenticationState` to conditionally render a full dashboard or a limited view.',
        codeblock: {
          title: 'Show conditional content',
          tabs: [
            {
              code: '../../examples/apis/authentication-state-conditional-content.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/authentication-state-conditional-content.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Check the authentication state before allowing the buyer to perform sensitive actions. This example uses `useAuthenticationState` to gate a button behind full authentication.',
        codeblock: {
          title: 'Gate sensitive actions',
          tabs: [
            {
              code: '../../examples/apis/authentication-state-gate-sensitive-actions.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/authentication-state-gate-sensitive-actions.example.ts',
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
