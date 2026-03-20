import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Checkbox';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'checkbox-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'CheckboxElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'CheckboxElementEvents',
    },
  ],
  defaultExample: {
    image: 'checkbox-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-checkbox.example.html',
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
          'Show validation feedback when a required checkbox has not been accepted. This example shows a terms of service checkbox with `required` and `error` props.',
        codeblock: {
          title: 'Require agreement before checkout',
          tabs: [
            {
              code: './examples/checkbox-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
