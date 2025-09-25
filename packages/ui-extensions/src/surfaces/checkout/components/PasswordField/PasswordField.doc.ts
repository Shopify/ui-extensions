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
      description: '',
      type: 'PasswordFieldElementEvents',
    },
    {
      title: 'Slots',
      description: '',
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
};

export default data;
