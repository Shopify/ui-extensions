import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForSessionApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'session-api', fileName);

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
        codeblock: generateCodeBlockForSessionApi(
          'Retrieve the current session data',
          'token',
        ),
      },
    ],
  },
};

export default data;
