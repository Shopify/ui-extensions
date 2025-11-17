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
    description: 'Examples of using the Session API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForSessionApi(
          'Retrieve the current session data',
          'token',
        ),
      },
    ],
  },
};

export default data;
