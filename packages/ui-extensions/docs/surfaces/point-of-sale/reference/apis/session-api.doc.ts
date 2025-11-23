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
