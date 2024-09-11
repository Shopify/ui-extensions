import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCameraScanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'camera-scanner', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'CameraScanner',
  description: `
    bannerProps has been deprecated. it is optional to pass in a [Banner component](/docs/api/pos-ui-extensions/components/banner) as a child instead.

    The camera scanner uses the device's camera to scan and decode barcodes or QR codes. It displays a live feed with guidance markers for alignment and triggers actions within the app upon successful recognition.
    `,
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'CameraScanner',
      description: '',
      type: 'CameraScannerProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'Scanner API',
      subtitle: 'See how to retrieve updates with the Scanner API.',
      url: '/api/pos-ui-extensions/apis/scanner-api#examples',
    },
  ],
  thumbnail: 'camera-scanner-thumbnail.png',
  defaultExample: {
    image: 'camera-scanner-next-default.png',
    codeblock: generateCodeBlockForCameraScanner(
      'Camera scanner and data text example',
      'default.example',
    ),
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Utilize the error banner to display scanning errors or unrecognized barcodes at the top of the camera view screen.
- After a successful scan, dismiss the full-screen camera view and display a secondary screen showcasing the intended outcome.
- The camera scanner UI can be adjusted to display the camera view on part of the screen while dedicating the remaining portion to other components. This can be useful for tasks like inventory management.
- In situations where scanning should not be allowed within a specific section of your application, use an error banner to inform merchants that scanning is not permitted on that screen and offer alternative areas where the scanning function can be performed.
- Use the error banner at the top of the screen to denote errors while scanning or when encountering an unrecognized barcode.
- Upon successful scanning of an item, display a ‘Toast’ component with a message such as "Item scanned" to indicate the outcome. Additionally, altering the screen contents can also be used to signal a successful scan.
`,
      image: 'camera-scanner-next-best-practice.png',
    },
    {
      type: 'Generic',
      anchorLink: 'content-guidelines',
      title: 'Content guidelines',
      sectionContent: `
For banners:

- Be concise.
- Keep to 1 or 2 short sentences.
- Be dismissible unless it contains critical information or an important step merchants need to take.

Example:

✅ Scanning not permitted on this screen. Go to {Section} to scan items.<br />
Dismiss (CTA)<br />
❌Error.

✅ Barcode not recognized. Try scanning item again.<br />
Dismiss (CTA)<br />
❌ Didn’t work.

For toasts:

- Used for short messages to confirm an action.
- Never go over 3 or 4 words.
- Do not use for error messages.
- Should be used for success messages.
- Written in the pattern of noun + verb.

Example:

✅ Item scanned.<br />
❌ Your item has been scanned and added to your inventory count!
      `,
    },
  ],
};

export default data;
