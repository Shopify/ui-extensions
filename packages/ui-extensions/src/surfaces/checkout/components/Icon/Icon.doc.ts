import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Icon';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'icon-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'IconProps',
    },
  ],
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-icon.example.html',
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
          'Display icons with semantic tones and custom sizes to convey status. This example uses the `tone` property for success, warning, and info states alongside the `size` property for emphasis.',
        codeblock: {
          title: 'Show status icons with tone and size',
          tabs: [
            {
              code: './examples/icon-status.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
