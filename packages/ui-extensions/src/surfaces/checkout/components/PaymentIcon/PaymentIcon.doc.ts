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
  examples: {
    description: '',
    examples: [
      {
        description:
          'Provide custom accessible names for payment method icons. This example uses `accessibilityLabel` to supply localized or descriptive names for screen readers when the default icon label is insufficient.',
        codeblock: {
          title: 'Label payment icons for screen readers',
          tabs: [
            {
              code: './examples/payment-icon-labeled.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
