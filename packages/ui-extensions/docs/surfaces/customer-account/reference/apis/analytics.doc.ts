import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Analytics',
  description: 'The API for interacting with web pixels.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_AnalyticsApi',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Using a session token with fetch()',
      tabs: [
        {
          code: '../examples/apis/session-token.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/session-token.example.ts',
          language: 'js',
          title: 'JavaScript',
        },
      ],
    },
  },
  related: [],
};

export default data;
