import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Modal',
  description:
    "Use `s-modal` to display content in a full-screen overlay. Modals are used to display important information that requires the merchant's attention.",
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
          language: 'HTML',
        },
      ],
    },
  },
  related: [],
};

export default data;
