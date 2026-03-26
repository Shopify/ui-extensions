import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Abbreviation';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {
    properties: true,
  },
  extraExamples: {
    description:
      'Examples of additional ways to use the Abbreviation component.',
    examples: [
      {
        description:
          'Use `title` so screen readers announce the full phrase behind the abbreviation. This example expands a common shipping term that buyers might not recognize.',
        codeblock: {
          title: 'Expand a shipping acronym for screen readers',
          tabs: [
            {
              code: './examples/abbreviation-shipping.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
