import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/TextArea';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Limit the character count and control the visible height of a text area. This example shows a gift message field with `maxLength` of 200 and 4 visible `rows`.',
        codeblock: {
          title: 'Limit character count and set visible rows',
          tabs: [
            {
              code: './examples/text-area-character-limit.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
