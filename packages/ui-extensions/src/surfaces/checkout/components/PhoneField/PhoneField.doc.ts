import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PhoneField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'phone-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PhoneFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'PhoneFieldElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'PhoneFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'phone-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-phone-field.example.html',
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
          'Validate that a phone number is provided with a message explaining why it is needed. This example shows a required contact number field with an error about delivery updates.',
        codeblock: {
          title: 'Require a phone number with validation',
          tabs: [
            {
              code: './examples/phone-field-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
