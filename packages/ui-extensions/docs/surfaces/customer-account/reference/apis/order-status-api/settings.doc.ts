import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Settings',
  description: 'The API for interacting with merchant settings.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_SettingsApi',
    },
    {
      title: 'useSettings',
      description:
        'Returns the setting values defined by the merchant for the extension.',
      type: 'UseSettingsGeneratedType',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Accessing merchant settings',
      tabs: [
        {
          code: '../../examples/apis/settings-access.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/settings-access.example.ts',
          language: 'js',
          title: 'JavaScript',
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
              code: '../../examples/apis/settings.example.toml',
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
