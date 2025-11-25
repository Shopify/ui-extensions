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
  category: 'APIs',
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
      sectionContent:
        '- Session tokens are only available when the authenticated user has proper app permissions enabled. Staff members who are pinned in but not authenticated can\'t generate tokens.\n' +
        '- Session data is read-only and can\'t be modified through the API. Changes to shop settings, locations, or staff assignments require POS application updates.\n' +
        '- Session tokens should only be used for communication with your app\'s configured backend service and can\'t be used for direct Shopify API calls from the client side.',
    },
  ],
  examples: {
    description:
      'Learn how to access session information and generate authentication tokens for secure API calls.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForSessionApi(
          'Access session data and generate authentication tokens',
          'token',
        ),
        description:
          'Retrieve current session information and generate secure authentication tokens for backend API calls. This example shows how to access shop details, user information, and location data through `shopify.session`, and use `shopify.session.getSessionToken()` to generate tokens for authenticated requests to your backend services.',
      },
    ],
  },
};

export default data;
