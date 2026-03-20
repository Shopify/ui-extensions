import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ConsentPhoneField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Validate that a phone number is provided before the buyer opts in to SMS marketing. This example shows a consent phone field with `required` and an error message for missing input.',
        codeblock: {
          title: 'Require a phone number for SMS consent',
          tabs: [
            {
              code: './examples/consent-phone-field-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  requires:
    'enabling of the `sms_marketing` capability of the [Customer Privacy](/docs/api/checkout-ui-extensions/latest/configuration#collect-buyer-consent) capability group to work.',
  definitions: {properties: true, events: true, slots: true},
});

export default data;
