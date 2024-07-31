import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'QRCode',
  description: 'Used to quickly access scannable data.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'qrcode-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'QRCodeProps',
      description: '',
      type: 'QRCodeProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'qrcode-default.png',
    codeblock: {
      title: 'Basic QR Code',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/QRCode/examples/basic-qrcode.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-qrcode.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `- Always test that the QR code is scannable from a smartphone.\n\n- Include a square logo if that’s what your customers are familiar with.\n\n- Increase usability by adding a text description of what the QR code does and provide alternate methods to get to the same destination, like a text input containing the value.`,
    },
  ],
  examples: {
    description: '',
    examples: [
      getExample('ui-components/qrcode-image', ['jsx', 'js']),
      getExample('ui-components/qrcode-fill-size', ['jsx', 'js']),
    ],
  },
  related: [],
};

export default data;
