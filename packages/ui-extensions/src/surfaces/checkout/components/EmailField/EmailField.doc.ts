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
      description: '',
      type: 'EmailFieldElementEvents',
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
};

export default data;
