import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'UI',
  description: 'The API for interacting with UI.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_UIApi',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Here is an example of using the `Toast.show` method to display a message to the customer indicating that their action to select a pickup address was successful.',
        codeblock: {
          title: 'Displaying a toast',
          tabs: [
            {
              code: '../examples/apis/toast-example.tsx',
              language: 'jsx',
              title: 'React',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
