import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PressButton';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Pre-select a toggle button by setting `defaultPressed` so it renders in its active state on first load. The buyer can still toggle it off.',
        codeblock: {
          title: 'Pre-select a press button',
          tabs: [
            {
              code: './examples/press-button-default-pressed.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
