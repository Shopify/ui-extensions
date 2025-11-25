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
        'Navigation API for all extensions. Refer to supported protocols',
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
  related: [],
};

export default data;
