import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSReceiptBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'qrcode', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'QRCode',
  description:
    'The QRCode component renders a QR code for receipts in Shopify POS. Use QR codes to provide quick access to digital content, enable contactless interactions, or share information that customers and merchants can easily scan with mobile devices.\n\nThe component generates QR codes with customizable size and error correction levels, suitable for various use cases from customer-facing displays to inventory labels. It automatically handle encoding, scaling, and rendering optimizations to ensure reliable scanning across different lighting conditions and device cameras commonly found in retail environments.\n\nautomatically select appropriate error correction levels based on QR code content and intended display size, balancing scanability with data density for reliable reading across use cases.',
  requires: 'use within a POSReceiptBlock component',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'qrcode-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the QRCode component.',
      type: 'QRCodeProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Media and visuals',
  related: [],
  defaultExample: {
    codeblock: generateCodeBlockForPOSReceiptBlock(
      'Display a QR code on a receipt',
      'default.example',
    ),
    description:
      'Render QR codes on receipts for quick access to digital content or contactless interactions. This example demonstrates generating QR codes with customizable size and error correction levels, enabling customers to easily scan information from printed or digital receipts.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Keep content concise and scannable:** QR codes become more complex and harder to scan with longer content. Keep encoded strings as short as possible while maintaining functionality. Use URL shorteners for long links or consider alternative approaches for extensive data.\n- **Test QR code scannability:** Verify that generated QR codes scan correctly across different devices and QR code reader apps. Test in various lighting conditions and at different distances.\n- **Provide context and instructions:** Include clear text near QR codes explaining what users can expect when they scan. For example, "Scan for store Wi-Fi access" or "Scan to view product details online." This helps users understand the value and builds confidence in scanning.\n- **Consider placement and visibility:** Position QR codes where they're easily visible to customers. Ensure adequate contrast, appropriate sizing, and clear space around the code. Avoid placing QR codes in areas where they might be obscured or difficult to scan.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- QR codes are display-only components and don't support click events or interactive behaviors—they rely on external scanning devices for interaction.\n- QR code scanning depends on user devices and apps—not all users may have QR code scanning capabilities readily available.\n- The QRCode component must be wrapped in a POSReceiptBlock component to be displayed on a receipt.\n`,
    },
  ],
};

export default data;
