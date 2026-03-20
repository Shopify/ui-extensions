import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PasswordField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true, slots: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Enforce a minimum password length with validation feedback. This example shows a required password field with `minLength` set to 8 and an error message.',
        codeblock: {
          title: 'Enforce a minimum password length',
          tabs: [
            {
              code: './examples/password-field-validation.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
