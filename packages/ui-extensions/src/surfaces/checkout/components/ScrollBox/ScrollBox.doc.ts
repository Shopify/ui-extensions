import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ScrollBox';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
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
});

export default data;
