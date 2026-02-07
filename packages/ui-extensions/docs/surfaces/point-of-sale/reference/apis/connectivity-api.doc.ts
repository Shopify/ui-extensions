import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForConnectivityApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'connectivity-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Connectivity API',
  description:
    'The Connectivity API provides access to device connectivity information, allowing you to monitor Internet connection status and respond to connectivity changes in real-time. The API enables both immediate connectivity checks and dynamic updates when network conditions change.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ConnectivityApi` object provides properties for monitoring network connectivity. Access these properties through `api.connectivity` to check connection status and subscribe to connectivity changes.',
      type: 'ConnectivityApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  related: [],
  examples: {
    description:
      'Learn how to monitor internet connectivity status and respond to network changes in your extension.',
    examples: [
      {
        codeblock: generateCodeBlockForConnectivityApi(
          'Monitor network connectivity changes',
          'subscribable',
        ),
        description:
          'Subscribe to connectivity state changes to respond when the device goes online or offline. This example demonstrates using the connectivity subscription to track network status and display the current connection state, allowing your extension to adapt behavior based on network availability.',
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Design for connectivity awareness:** Design your extension to handle network interruptions, informing users when network-dependent features are unavailable and providing clear guidance on next steps.\n- **Provide clear connectivity feedback:** Display connectivity status to users when it affects functionality, helping them understand why certain features may be limited or unavailable.\n- **Queue operations during outages:** Implement queuing mechanisms for non-critical operations that can be deferred until connectivity is restored.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- The Connectivity API provides read-only access to connectivity information and can't be used to control or modify network settings on the device.\n- \`RemoteSubscribable\` supports only one subscription at a time. Use \`makeStatefulSubscribable\` if you need multiple components to subscribe to connectivity changes simultaneously.\n- Connectivity status reflects Internet connectivity only and may not indicate the quality or speed of the connection, which could affect API performance.\n- The API monitors general Internet connectivity but doesn't provide specific information about Shopify service availability or API endpoint availability.\n`,
    },
  ],
};

export default data;
