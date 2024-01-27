import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

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
};

export default data;
