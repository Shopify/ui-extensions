import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ClickableChip';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Add a visual indicator alongside the chip label using the `graphic` slot with `s-icon`. This example shows a chip with a discount icon that links to a sale collection.',
        codeblock: {
          title: 'Add an icon and link to a chip',
          tabs: [
            {
              code: './examples/clickable-chip-icon.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
