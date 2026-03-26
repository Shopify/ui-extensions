import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Chip';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, slots: true},
  extraExamples: {
    description: 'Examples of additional ways to use the Chip component.',
    examples: [
      {
        description:
          'Use the `graphic` slot with `s-icon` and `accessibilityLabel` for chips whose text alone doesn\'t convey the full meaning. The API restricts the `graphic` slot to icon elements.',
        codeblock: {
          title: 'Add an icon and a screen-reader label to a chip',
          tabs: [
            {
              code: './examples/chip-icon.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
