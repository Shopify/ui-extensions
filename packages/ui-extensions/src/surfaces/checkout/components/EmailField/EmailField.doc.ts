import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/EmailField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'email-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'EmailFieldElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'EmailFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'email-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-email-field.example.html',
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
          'Validate that an email address is provided before the form can be submitted. This example shows a required email field with an error message for missing input.',
        codeblock: {
          title: 'Validate a required email address',
          tabs: [
            {
              code: './examples/email-field-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
