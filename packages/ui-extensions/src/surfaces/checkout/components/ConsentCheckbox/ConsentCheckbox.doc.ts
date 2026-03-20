import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ConsentCheckbox';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'consent-checkbox-thumbnail.png',
  requires:
    'enabling of the `sms_marketing` capability of the [Customer Privacy](/docs/api/checkout-ui-extensions/latest/configuration#collect-buyer-consent) capability group to work.',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ConsentCheckboxElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ConsentCheckboxElementEvents',
    },
  ],
  defaultExample: {
    image: 'consent-checkbox-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-consent-checkbox.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
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
};

export default data;
