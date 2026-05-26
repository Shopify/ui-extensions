import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigation API',
  overviewPreviewDescription:
    'The API provided to extensions to navigate to extensions or host page.',
  description: `The API provided to extensions to navigate to extensions or host page.`,
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  definitions: [
    {
      title: 'Navigation',
      description:
        'Navigation API for all extensions. [Refer to supported protocols](/docs/api/customer-account-ui-extensions/unstable#custom-protocols)',
      type: 'Navigation',
    },
  ],
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/apis/navigation.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Navigation api examples',
    examples: [
      {
        codeblock: {
          title: 'Listening for navigation current entry events',
          tabs: [
            {
              code: '../examples/apis/navigation-event-listeners.example.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        codeblock: {
          title: 'Navigating to native order index page',
          tabs: [
            {
              code: '../examples/apis/navigating-to-customer-account-page.example.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
