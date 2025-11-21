import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForSessionApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'session-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Session API',
  description:
    'The Session API contains the information about the current user session, and allows to fetch a fresh session token for communication with your apps backend service.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'SessionApi',
      description: '',
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
          'Retrieve a session token for backend communication',
          'token',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForSessionApi(
          'Access properties associated with the current session',
          'current-session',
        ),
      },
    ],
  },
};

export default data;
