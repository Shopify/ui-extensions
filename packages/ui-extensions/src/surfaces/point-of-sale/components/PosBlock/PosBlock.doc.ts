import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PosBlock',
  description: 'Create a container to place content with an action button.',
  thumbnail: 'pos-block-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PosBlock',
    },
    {
      title: 'QR Code',
      description:
        'Renders a QR code when the block is used within a Receipt target.',
      type: 'QrCode',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PosBlockSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'pos-block-default.png',
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
