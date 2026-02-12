import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCameraScanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'camera-scanner', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'CameraScanner',
  description:
    'The CameraScanner component provides camera-based scanning functionality with optional banner messaging. Use it to enable barcode scanning, QR code reading, or other camera-based input methods with contextual user feedback.\n\nCameraScanner works in conjunction with the Scanner API to capture scan data from device cameras, providing both the visual interface and the data handling capabilities for complete scanning workflows.\n\nCameraScanner components provide real-time feedback during scanning operations with visual guides for optimal positioning, helping merchants quickly capture barcodes even in challenging lighting conditions or with damaged labels. The component provides audio feedback during scanning operations, confirming successful scans without requiring visual confirmation.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the CameraScanner component.',
      type: 'CameraScannerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Navigation and content',
  related: [],
  thumbnail: 'camera-scanner-thumbnail.png',
  defaultExample: {
    image: 'camera-scanner-default.png',
    codeblock: generateCodeBlockForCameraScanner(
      'Scan barcodes with the camera',
      'default.example',
    ),
    description:
      'Enable barcode and QR code scanning using the device camera. This example demonstrates a full-screen camera scanner with scan data display and banner messaging, showing how to integrate camera-based scanning into your workflow for product lookups or inventory management.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Implement proper post-scan workflow management:** After successful scanning, dismiss the full-screen camera view and display a secondary screen showcasing the intended outcome. Use the Toast API (\`toast.show()\`) with concise messages like "Item scanned" to confirm successful operations and consider altering screen content to signal completion.\n- **Optimize camera view layout for multitasking:** Adjust the camera scanner UI to display the camera view on part of the screen while dedicating remaining space to other components. This approach is particularly useful for tasks like inventory management where users need to see both camera input and related information simultaneously.\n- **Write effective banner content:** Keep banner messages concise with one to two short sentences maximum. Make banners dismissible unless they contain critical information or important steps merchants need to take. Use clear, actionable language that guides users toward successful scanning.\n- **Coordinate with Toast API for success feedback:** Use the Toast API (\`toast.show()\`) for short confirmation messages after successful scans. Keep toast messages to three to four words maximum, avoid using them for error messages, and write them in noun + verb pattern. For example, "Item scanned" instead of "Your item has been scanned and added to your inventory count!".\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- CameraScanner requires device camera access and appropriate permissions—functionality is limited on devices without cameras or when permissions are denied.\n- Banner messaging is the only built-in user feedback mechanism—complex scanning feedback or custom UI elements require additional components or external state management.\n- The component handles basic camera functionality—advanced camera controls, image processing, or custom scanning algorithms aren't supported within the component itself.\n`,
    },
  ],
};

export default data;
