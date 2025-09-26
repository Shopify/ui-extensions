import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Modal',
  description:
    'Displays content in an overlay that requires merchant attention. Use to present critical information, confirmations, or focused tasks without losing page context.',
  thumbnail: 'modal-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Modal',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ModalSlots',
    },
    {
      title: 'Events',
      description: '',
      type: 'ModalEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'modal-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;
