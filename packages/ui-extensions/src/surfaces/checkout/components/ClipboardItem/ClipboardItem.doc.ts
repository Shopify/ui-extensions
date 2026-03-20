import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ClipboardItem';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  isVisualComponent: false,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Trigger a clipboard copy from a link instead of a button using `commandFor`. This example demonstrates an `s-link` that copies a tracking URL to the clipboard when clicked.',
        codeblock: {
          title: 'Copy a tracking link with a link trigger',
          tabs: [
            {
              code: './examples/clipboard-link.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
