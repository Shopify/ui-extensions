import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Details';
import summarySharedContent from '../../../../docs/shared/components/Summary';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Set `toggleTransition="none"` to expand the disclosure instantly. This example shows a return policy summary that skips the default expand animation.',
        codeblock: {
          title: 'Show policy details without open animation',
          tabs: [
            {
              code: './examples/details-no-animation.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subcomponent: {
    ...summarySharedContent,
    definitions: {properties: true},
  },
});

export default data;
