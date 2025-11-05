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
};

export default data;
