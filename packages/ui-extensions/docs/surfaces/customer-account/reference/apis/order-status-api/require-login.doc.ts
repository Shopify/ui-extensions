import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Require Login API',
  description:
    'The Require Login API lets your extension prompt pre-authenticated buyers to log in on the order status page. Use this API to gate sensitive content and actions behind full authentication by calling the `requireLogin()` function.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the login prompt method. Call `requireLogin()` on the `OrderStatusApi` object to trigger a login prompt for pre-authenticated buyers.',
      type: 'Docs_OrderStatus_RequireLoginApi',
    },
  ],
  defaultExample: {
    description:
      'Prompt the buyer to log in before showing detailed order data. This example checks `shopify.authenticationState` and calls `shopify.requireLogin()` for pre-authenticated buyers, then displays tracking details once authenticated.',
    codeblock: {
      title: 'Gate sensitive information',
      tabs: [
        {
          code: '../../examples/apis/require-login-gate.example.jsx',
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
          'Require the buyer to log in before performing an action like initiating a return. This example calls `shopify.requireLogin()` and then checks `shopify.authenticationState` to verify the buyer completed login before proceeding.',
        codeblock: {
          title: 'Enforce authentication for actions',
          tabs: [
            {
              code: '../../examples/apis/require-login-action.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Avoid unnecessary login prompts by checking the authentication state first. This example reads `shopify.authenticationState` and only calls `shopify.requireLogin()` when the buyer is `pre_authenticated`.',
        codeblock: {
          title: 'Check the auth state before prompting',
          tabs: [
            {
              code: '../../examples/apis/require-login-check-state.example.jsx',
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
        '- **Check authentication state first**: Use the [Authentication State API](/docs/api/customer-account-ui-extensions/target-apis/account-apis/authentication-state-api) to check if the buyer is `pre_authenticated` before calling `requireLogin()`. Calling it on an already authenticated buyer has no effect.\n- **Use for sensitive content**: Only prompt for login when your extension needs to display information that requires full authentication, such as detailed customer data or account-specific actions.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- `requireLogin()` only triggers a login prompt — it doesn't guarantee the buyer will complete the login. Your extension should gracefully handle the case where the buyer dismisses the prompt.\n- This API is only available on the order status page. It isn't available on other customer account extension targets.",
    },
  ],
  related: [],
};

export default data;
