import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Switch';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Pre-enable a setting by rendering the switch in its active state on first load. This example shows an order notifications switch with `defaultChecked` that the buyer can toggle off.',
        codeblock: {
          title: 'Pre-enable a switch',
          tabs: [
            {
              code: './examples/switch-default-checked.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
