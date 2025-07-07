import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PaymentIcon';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'paymenticon-thumbnail.png',
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
    image: 'paymenticon-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-paymenticon.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
