import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Popover';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Constrain the popover height so long content scrolls within a fixed area. This example displays a size chart with `maxBlockSize` set to limit the overlay height.',
        codeblock: {
          title: 'Constrain popover height with a size limit',
          tabs: [
            {
              code: './examples/popover-constrained.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
