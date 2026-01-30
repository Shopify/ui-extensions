import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForSessionApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'session-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Session API',
  description:
    'The Session API provides access to current POS session information and secure authentication tokens, allowing you to retrieve shop details, user information, location data, and generate tokens for secure backend communication. The API includes both static session data and dynamic token generation for authenticated API calls.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'SessionApi',
      description:
        'The `SessionApi` object provides access to current session information and authentication methods. Access these properties and methods through `shopify.session` to retrieve shop data and generate secure tokens. These methods enable secure API calls while maintaining user privacy and [app permissions](https://help.shopify.com/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).',
      type: 'SessionApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle authentication properly:** Check for undefined session tokens and implement proper fallback behavior when authentication fails or permissions are insufficient.\n' +
        '- **Use appropriate identifiers:** Distinguish between `userId` (authenticated account) and `staffMemberId` (pinned staff member) to implement correct permissions and personalization logic.\n' +
        '- **Implement location-aware features:** Use `locationId` and `currency` information.\n' +
        '- **Secure backend communication:** Use session tokens exclusively for backend API calls and never expose them in client-side logs or storage. Validate tokens on your backend before processing requests.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Session tokens are only available when the authenticated user has proper app permissions enabled—staff members who are pinned in but not authenticated can't generate tokens.
- Session tokens should only be used for communication with your app's configured backend service and can't be used for direct Shopify API calls from the client side.
`,
    },
  ],
  examples: {
    description:
      'Learn how to access session information and generate authentication tokens for secure API calls.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForSessionApi(
          'Access properties associated with the current session',
          'current-session',
        ),
        description:
          'Access comprehensive session information including shop details, user data, and location information. This example shows how to use `shopify.session.currentSession` to retrieve the shop ID, domain, currency, user ID, location ID, staff member ID, and POS version. Use this data to build location-aware features and personalized experiences.',
      },
      {
        codeblock: generateJsxCodeBlockForSessionApi(
          'Access session data and generate authentication tokens',
          'token',
        ),
        description:
          'Access session data and generate authentication tokens. This example shows how to access shop details, user information, and location data through `shopify.session`, and use `shopify.session.getSessionToken()` to generate tokens for authenticated requests to your backend services.',
      },
      {
        codeblock: generateJsxCodeBlockForSessionApi(
          'Retrieve the device ID',
          'device-id',
        ),
        description:
          'Access the unique identifier of the current POS device. This example demonstrates using `shopify.deviceId` to retrieve the device ID. Use this data to construct a GID to query device details via GraphQL Admin API.',
      },
    ],
  },
};

export default data;
