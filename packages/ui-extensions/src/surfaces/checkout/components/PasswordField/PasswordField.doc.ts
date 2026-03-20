import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PasswordField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'password-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PasswordFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'PasswordFieldElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'PasswordFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'password-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-password-field.example.html',
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
};

export default data;
