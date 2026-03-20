import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ConsentCheckbox';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Collect analytics consent by setting `policy` to `customer-privacy`. This example shows a consent checkbox configured for the customer privacy policy instead of SMS marketing.',
        codeblock: {
          title: 'Collect analytics consent',
          tabs: [
            {
              code: './examples/consent-checkbox-privacy.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  requires:
    'enabling of the `sms_marketing` capability of the [Customer Privacy](/docs/api/checkout-ui-extensions/latest/configuration#collect-buyer-consent) capability group to work.',
  definitions: {properties: true, events: true},
});

export default data;
