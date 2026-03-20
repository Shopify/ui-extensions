import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/TextField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Add contextual labels around input values using `prefix` and `suffix`. This example demonstrates a discount code field with a "PROMO-" prefix and a tip field with a "%" suffix.',
        codeblock: {
          title: 'Add a prefix and suffix to text fields',
          tabs: [
            {
              code: './examples/text-field-prefix-suffix.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  bestPractices: `
- Clearly label text fields so that it’s obvious what customers should enter.
- Label text fields as optional when input isn’t required. For example, use the label <b>First name (optional)</b>.
- Don’t have optional fields pass true to the required property.`,
});

export default data;
