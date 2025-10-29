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
};

export default data;
