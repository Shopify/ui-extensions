import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Checkbox';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Show validation feedback when a required checkbox has not been accepted. This example shows a terms of service checkbox with `required` and `error` props.',
        codeblock: {
          title: 'Require agreement before checkout',
          tabs: [
            {
              code: './examples/checkbox-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
