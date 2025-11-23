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
      title: 'SessionApi',
      description:
        'The `SessionApi` object provides access to current session information and authentication methods. Access these properties and methods through `api.session` to retrieve shop data and generate secure tokens. These methods enable secure API calls while maintaining user privacy and [app permissions](https://help.shopify.com/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).',
      type: 'SessionApiContent',
    },
  ],
  category: 'APIs',
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
};

export default data;
