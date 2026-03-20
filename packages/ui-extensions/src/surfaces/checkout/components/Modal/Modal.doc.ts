import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Modal';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'modal-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ModalElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ModalElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'ModalElementSlots',
    },
    {
      title: 'Methods',
      description:
        'Learn more about [component methods](/docs/api/checkout-ui-extensions/latest/using-polaris-components#methods).',
      type: 'ModalElementMethods',
    },
  ],
  defaultExample: {
    image: 'modal-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-modal.example.html',
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
          'Ask the buyer to confirm before cancelling an order. This example demonstrates a small modal with a warning message, a critical-toned primary button, and a secondary button to keep the order.',
        codeblock: {
          title: 'Confirm a destructive action in a modal',
          tabs: [
            {
              code: './examples/modal-with-actions.example.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Collect input inside a modal without leaving the checkout flow. This example demonstrates a gift message form with text fields, a text area, and a checkbox, using the action slots for save and cancel buttons.',
        codeblock: {
          title: 'Collect input with a form modal',
          tabs: [
            {
              code: './examples/modal-with-form.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
