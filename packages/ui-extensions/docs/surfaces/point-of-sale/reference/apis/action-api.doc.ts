import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action API',
  description:
    'The Action API allows an action extension to modally present its corresponding modal target.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Action',
      description: '',
      type: 'ActionApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Action API.',
    examples: [
      {
        codeblock: {
          title: 'Present a modal screen',
          tabs: [
            {
              title: 'React',
              code: '../examples/action-api/present-modal.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: '../examples/action-api/present-modal.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
};

export default data;
