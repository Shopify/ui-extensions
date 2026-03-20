import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Clickable';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Wrap content in a styled clickable area that navigates like a link. This example displays a card-like wrapper with `padding`, `border`, and `borderRadius` around text that links to an external page.',
        codeblock: {
          title: 'Create a clickable card with custom styling',
          tabs: [
            {
              code: './examples/clickable-link.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
