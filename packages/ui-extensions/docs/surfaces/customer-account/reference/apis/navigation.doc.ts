import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigation',
  overviewPreviewDescription:
    'The API provided to extensions to navigate to extensions or host page.',
  description: `The API provided to extensions to navigate to extensions or host page.`,
  isVisualComponent: false,
  category: 'APIs',
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
      title: 'Navigation example',
      tabs: [
        {
          code: '../examples/navigation/default-preact.example.tsx',
          language: 'jsx',
          title: 'Preact',
        },
      ],
    },
  },
  related: [],
};

export default data;
