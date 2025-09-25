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
};

export default data;
