import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Require Login API',
  description:
    'The Require Login API triggers a login prompt for buyers viewing a pre-authenticated order status page. Use this API to require the buyer to log in before performing sensitive actions.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      'Prompt the buyer to log in before performing an action, using the requireLogin method from the API. This example calls `requireLogin()` on button press and awaits the returned promise.',
    codeblock: {
      title: 'Prompt login for action',
      tabs: [
        {
          code: '../../examples/apis/require-login-prompt-login-for-action.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/require-login-prompt-login-for-action.example.ts',
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
        'The `OrderStatusApi` object provides the `requireLogin` method. Access it on the `OrderStatusApi` object to trigger a login prompt.',
      type: 'Docs_OrderStatus_RequireLoginApi',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Check authentication state first**: Use the [Authentication State API](/docs/api/customer-account-ui-extensions/target-apis/order-apis/authentication-state-api) to check whether the buyer is already authenticated before calling `requireLogin`.\n- **Don't block the initial render**: Call `requireLogin` in response to a buyer action, not during the initial render. This avoids unexpected login prompts when the page loads.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- `requireLogin()` only triggers a login prompt \u2014 it doesn't guarantee the buyer will complete the login. Your extension should gracefully handle the case where the buyer dismisses the prompt.\n- This API is only available on the order status page. It isn't available on other customer account extension targets.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Check the authentication state and only prompt login if the buyer is pre-authenticated. This example combines `useAuthenticationState` with `requireLogin()` to avoid unnecessary prompts.',
        codeblock: {
          title: 'Check state then prompt',
          tabs: [
            {
              code: '../../examples/apis/require-login-check-state-then-prompt.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/require-login-check-state-then-prompt.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Wrap multiple actions with a login requirement to enforce authentication before proceeding. This example creates a reusable handler that calls `requireLogin()` before executing the protected action.',
        codeblock: {
          title: 'Enforce auth for actions',
          tabs: [
            {
              code: '../../examples/apis/require-login-enforce-auth-for-actions.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/require-login-enforce-auth-for-actions.example.ts',
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
