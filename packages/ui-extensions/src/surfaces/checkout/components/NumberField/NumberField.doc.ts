import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/NumberField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Add contextual labels around a numeric input for units of measurement. This example displays a weight field with a `prefix` and `suffix` for approximate kilograms.',
        codeblock: {
          title: 'Add a prefix and suffix to a number field',
          tabs: [
            {
              code: './examples/number-field-prefix-suffix.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
