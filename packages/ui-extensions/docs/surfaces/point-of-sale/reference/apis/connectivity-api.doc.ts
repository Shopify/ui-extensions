import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForConnectivityApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'connectivity-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Connectivity API',
  description:
    'The Connectivity API provides access to device connectivity information, allowing you to monitor Internet connection status and respond to connectivity changes in real-time. The API enables both immediate connectivity checks and dynamic updates when network conditions change.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ConnectivityApi',
      description:
        'The `ConnectivityApi` object provides access to current connectivity information and change notifications. Access these properties through `shopify.connectivity` to monitor network status.',
      type: 'ConnectivityApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Platform APIs',
<<<<<<< HEAD
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Handle changes gracefully:** Use \`subscribe\` to adapt behavior when connectivity changes.
- **Design for network interruptions:** Inform users when network-dependent features are unavailable and provide guidance.
- **Display connectivity status:** Show status when it affects functionality to help users understand limitations.
- **Queue operations during outages:** Implement queuing for non-critical operations that can be deferred until connectivity is restored.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Connectivity status reflects Internet connectivity only and may not indicate the quality or speed of the connection, which could affect API performance.
`,
    },
  ],
=======
>>>>>>> 2025-10
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle connectivity changes gracefully:** Use the `subscribe` method to automatically adapt your extension behavior when connectivity changes.\n' +
        '- **Design for connectivity awareness:** Design your extension to handle network interruptions, informing users when network-dependent features are unavailable and providing clear guidance on next steps.\n' +
        '- **Provide clear connectivity feedback:** Display connectivity status to users when it affects functionality, helping them understand why certain features may be limited or unavailable.\n' +
        '- **Queue operations during outages:** Implement queuing mechanisms for non-critical operations that can be deferred until connectivity is restored.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Connectivity status reflects Internet connectivity only and may not indicate the quality or speed of the connection, which could affect API performance.
`,
    },
  ],
  examples: {
    description:
<<<<<<< HEAD
      'Learn how to monitor network connectivity status and respond to connectivity changes.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForConnectivityApi(
          'Monitor network connectivity changes',
=======
      'Learn how to monitor Internet connectivity status and respond to network changes.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForConnectivityApi(
          'Monitor Internet connectivity status',
>>>>>>> 2025-10
          'subscribe',
        ),
        description:
          'Subscribe to connectivity changes to monitor network status in real time. This example demonstrates using `shopify.connectivity.subscribe()` and `shopify.connectivity.connected` to detect when the device goes online or offline. This enables adaptive behavior for offline-capable features or network-dependent operations.',
      },
    ],
  },
};

export default data;
