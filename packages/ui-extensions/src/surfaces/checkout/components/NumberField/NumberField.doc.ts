import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/NumberField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'number-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'NumberFieldElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'NumberFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'number-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-number-field.example.html',
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
          'Add contextual labels around a numeric input for units of measurement. This example displays a weight field with a `prefix` and `suffix` for approximate kilograms.',
        codeblock: {
          title: 'Add a prefix and suffix to a number field',
          tabs: [
            {
              code: './examples/number-field-prefix-suffix.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
