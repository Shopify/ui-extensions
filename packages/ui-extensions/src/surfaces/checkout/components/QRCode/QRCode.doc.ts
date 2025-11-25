import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/QRCode';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  isVisualComponent: true,
  thumbnail: 'qr-code-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'QRCodeElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'QRCodeElementEvents',
    },
  ],
  defaultExample: {
    image: 'qr-code-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-qr-code.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Always test that the QR code is scannable from a smartphone.
- Include a square logo if that’s what your customers are familiar with.
- Increase usability by adding a text description of what the QR code does.
- Always provide an alternate method for customers to access the content of the QR code.
- If the content is a URL, provide a \`s-link\` nearby.
- If the content is data, provide a \`s-button\` to copy the data to the clipboard, or show the data in a readonly \`s-text-field\`.`,
    },
  ],
};

export default data;
