import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/MoneyField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'money-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'MoneyFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'MoneyFieldElementEvents',
    },
  ],
  defaultExample: {
    image: 'money-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-money-field.example.html',
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
          'Constrain a monetary value to a valid range with specific increments. This example shows a tip amount field with `min`, `max`, and `step` props.',
        codeblock: {
          title: 'Constrain a money field to a range',
          tabs: [
            {
              code: './examples/money-field-range.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
