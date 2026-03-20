import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Tooltip';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Add tooltips to checkout details using info icons. This example displays two tooltips providing delivery and duty information, each paired with an `s-clickable` using `interestFor`.',
        codeblock: {
          title: 'Show a tooltip on inline text',
          tabs: [
            {
              code: './examples/tooltip-on-text.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
