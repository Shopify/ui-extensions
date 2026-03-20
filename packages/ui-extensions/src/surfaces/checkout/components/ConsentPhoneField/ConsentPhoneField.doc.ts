import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ConsentPhoneField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'consent-phone-field-thumbnail.png',
  requires:
    'enabling of the `sms_marketing` capability of the [Customer Privacy](/docs/api/checkout-ui-extensions/latest/configuration#collect-buyer-consent) capability group to work.',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ConsentPhoneFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ConsentPhoneFieldElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'ConsentPhoneFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'consent-phone-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-consent-phone-field.example.html',
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
};

export default data;
