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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Handle authentication:** Check for undefined session tokens and implement fallback behavior when authentication fails.
- **Use appropriate identifiers:** Distinguish between \`userId\` (authenticated account) and \`staffMemberId\` (pinned staff) for permissions and personalization.
- **Implement location-aware features:** Use \`locationId\` and \`currency\` for location-specific functionality like inventory checks and tax calculations.
- **Secure backend communication:** Use session tokens only for backend API calls. Never expose in logs or storage. Validate tokens on your backend.
`,
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
  related: [],
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
          'Access session data and generate authentication tokens. This example shows how to access shop details, user information, and location data through `shopify.session`, and use `shopify.session.getSessionToken()` to generate tokens for authenticated requests to your backend services.',
      },
    ],
  },
};

export default data;
