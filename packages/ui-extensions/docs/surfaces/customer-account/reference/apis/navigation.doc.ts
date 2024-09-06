import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

// import {
//   getExample,
//   getLinksByTag,
//   REQUIRES_PROTECTED_CUSTOMER_DATA,
// } from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigation',
  overviewPreviewDescription:
    'The API provided to extensions to navigate to extensions or host page.',
  description: `The API provided to extensions to navigate to extensions or host page.`,
  // requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'Navigation',
      description:
        'Navigation API for all extensions. [Refer to supported protocols](/docs/api/customer-account-ui-extensions/unstable#custom-protocols)',
      type: 'StandardExtensionNavigation',
    },
    {
      title: 'Full-Page Navigation',
      description:
        'Only available for full-page extension `customer-account.page.render`',
      type: 'FullExtensionNavigation',
    },
    {
      title: 'useNavigationCurrentEntry',
      description: 'Returns the live navigation current entry',
      type: 'UseNavigationCurrentEntryGeneratedType',
    },
  ],
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Navigation example',
      tabs: [
        {
          code: '../examples/navigation/default-react.example.tsx',
          language: 'React',
          title: 'React',
        },
        {
          code: '../examples/navigation/default-js.example.ts',
          language: 'js',
          title: 'js',
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
              code: '../examples/navigation/event-listeners.example.tsx',
              language: 'jsx',
              title: 'React',
            },
          ],
        },
      },
      {
        codeblock: {
          title: 'Using the live current entry value in a full-page extension',
          tabs: [
            {
              code: '../examples/navigation/use-current-entry.example.tsx',
              language: 'jsx',
              title: 'React',
            },
          ],
        },
      },
      {
        codeblock: {
          title: 'Using react router in a full-page extension (Experimental)',
          tabs: [
            {
              code: '../examples/navigation/react-router.example.tsx',
              language: 'jsx',
              title: 'React',
            },
          ],
        },
      },
      {
        codeblock: {
          title: 'Navigating to customer account native order index page',
          tabs: [
            {
              code: '../examples/navigation/navigating-to-customer-account-page.example.tsx',
              language: 'jsx',
              title: 'React',
            },
          ],
        },
      },
    ],
  },
  related: [
    {
      name: 'StandardApi',
      subtitle: 'APIs',
      url: '/docs/api/customer-account-ui-extensions/apis/standardapi',
      type: 'StandardApi',
    },
  ],
};

export default data;
