import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ScrollBox';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'scroll-box-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ScrollBoxProps',
    },
  ],
  defaultExample: {
    image: 'scroll-box-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-scroll-box.example.html',
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
          'Set `overflow="hidden"` to clip content that exceeds the container instead of showing a scrollbar. This example constrains a block of text to a fixed height.',
        codeblock: {
          title: 'Clip overflowing content without scrolling',
          tabs: [
            {
              code: './examples/scroll-box-hidden.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [],
};

export default data;
