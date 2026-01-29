import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForCameraApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'camera-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Camera API',
  description:
    "The Camera API provides access to the device's camera, enabling photo capture directly within POS UI extensions. The API requests camera permissions if not already enabled, opens the native camera interface, and returns the image data including dimensions, file size, and base64 string for immediate display or server upload.",
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CameraApi',
      description:
        'The `CameraApi` object provides methods for capturing photos using the device camera. Access these methods through `shopify.camera` to take photos and retrieve image data with metadata.',
      type: 'CameraApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Optimize image quality:** Use appropriate quality and size settings to balance image quality with file size and upload performance.
- **Provide feedback:** Show loading states while processing images and clear success/error messages after capture.
- **Handle errors gracefully:** Account for scenarios where users cancel, camera is unavailable, or permissions are denied.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Camera functionality requires the device to have a camera and appropriate permissions granted by the user.
- Only one camera operation can be in progress at a time. Attempting to call \`takePhoto()\` while a capture is already in progress will result in a rejected promise.
- Base64 strings can be memory-intensive for large images. Use appropriate \`maxWidth\`, \`maxHeight\`, and \`quality\` settings to optimize performance.
- The \`facingMode\` parameter may not behave consistently on all Android devices, because camera-facing behavior varies across manufacturers. If a requested mode isn't supported, the rear-facing camera is used by default, and users can still manually switch cameras from the camera interface.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to capture photos using the device camera and handle the resulting image data.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCameraApi(
          'Capture and upload photo to server',
          'take-photo-upload',
        ),
        description:
          'This example demonstrates capturing a photo using `shopify.camera.takePhoto()` and uploading it to a backend server for further processing. It shows loading states during capture and upload, handles errors appropriately, and confirms successful upload with toast notifications.',
      },
      {
        codeblock: generateJsxCodeBlockForCameraApi(
          'Capture and display a photo',
          'take-photo-display',
        ),
        description:
          'This example demonstrates using `shopify.camera.takePhoto()` to capture an image with the device camera and displaying it immediately using the `image` component.',
      },
    ],
  },
};

export default data;
