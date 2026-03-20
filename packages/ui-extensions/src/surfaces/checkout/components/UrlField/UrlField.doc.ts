import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/URLField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'url-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'UrlFieldElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'UrlFieldElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'UrlFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'url-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-url-field.example.html',
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
          'Validate that a URL is provided with a message explaining what link is expected. This example shows a required return policy URL field with an error message.',
        codeblock: {
          title: 'Require a URL with validation',
          tabs: [
            {
              code: './examples/url-field-required.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
