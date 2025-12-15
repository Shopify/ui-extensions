import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Intents',
  overviewPreviewDescription:
    'The API for invoking Shopify intents to request workflows.',
  description: `Entry point for Shopify intents. Intents pair an \`action\` (verb) with a resource \`type\` and optional \`value\` and \`data\` to request a workflow.`,
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'Intents',
      description: 'Intents API for invoking Shopify workflows.',
      type: 'Intents',
    },
  ],
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/apis/intents.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  related: [],
};

export default data;
