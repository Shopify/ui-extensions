import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Settings API',
  description: 'The API for interacting with merchant settings.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_SettingsApi',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/apis/settings-access.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'You can define settings that merchants can edit within the checkout editor. See [settings](/docs/api/customer-account-ui-extensions/configuration#settings-definition) for more information on how to define these.',
        codeblock: {
          title: 'Define merchant settings',
          tabs: [
            {
              code: '../examples/apis/settings.example.toml',
              language: 'toml',
              title: 'shopify.extension.toml',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
