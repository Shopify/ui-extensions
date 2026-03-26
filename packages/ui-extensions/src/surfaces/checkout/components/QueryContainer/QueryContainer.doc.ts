import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/QueryContainer';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'query-container-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'QueryContainerProps',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-query-container.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Set `containerName` to target `@container` queries to a specific ancestor. This example applies responsive padding that activates only when the named container exceeds 400px.',
        codeblock: {
          title: 'Name a container for targeted queries',
          tabs: [
            {
              code: './examples/query-container-named.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  related: [
    {
      name: 'Responsive values',
      subtitle: 'Utility',
      url: '/docs/api/checkout-ui-extensions/latest/using-polaris-components#responsive-values',
      type: 'utility',
    },
  ],
};

export default data;
