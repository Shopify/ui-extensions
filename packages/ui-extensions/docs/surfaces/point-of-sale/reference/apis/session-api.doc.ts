import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForSessionApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'session-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Session API',
  description:
    'The Session API provides access to current POS session information and secure authentication tokens, allowing you to retrieve shop details, user information, location data, and generate tokens for secure backend communication. The API includes both static session data and dynamic token generation for authenticated API calls.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `SessionApi` object provides access to current session information and authentication. Access these properties through `api.session` to retrieve shop data and generate secure tokens. These properties enable secure API calls while maintaining user privacy and [app permissions](https://help.shopify.com/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).',
      type: 'SessionApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  related: [],
  examples: {
    description:
      'Learn how to access session information and generate secure authentication tokens for backend communication.',
    examples: [
      {
        codeblock: generateCodeBlockForSessionApi(
          'Access shop and location information',
          'token',
        ),
        description:
          'Retrieve current session data including shop domain, location ID, and user information. This example shows how to access session properties to get shop context, enabling you to personalize experiences, make location-specific decisions, or pass shop identifiers to backend services.',
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use appropriate identifiers:** Distinguish between \`userId\` (authenticated account) and \`staffMemberId\` (pinned staff member) to implement correct permissions and personalization logic.\n- **Implement location-aware features:** Use \`locationId\` and \`currency\` information.\n- **Secure backend communication:** Use session tokens exclusively for backend API calls and never expose them in client-side logs or storage. validate tokens on your backend before processing requests.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Session tokens are only available when the authenticated user has proper app permissions enabled. Staff members who are pinned in but not authenticated can't generate tokens.\n- Session data is read-only and can't be modified through the API. Changes to shop settings, locations, or staff assignments require POS application updates.\n- Session tokens should only be used for communication with your app's configured backend service and can't be used for direct Shopify API calls from the client side.\n`,
    },
  ],
};

export default data;
