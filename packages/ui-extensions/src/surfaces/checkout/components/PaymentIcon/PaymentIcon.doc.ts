import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PaymentIcon';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'payment-icon-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PaymentIconProps',
    },
  ],
  defaultExample: {
    image: 'payment-icon-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-payment-icon.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
