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
      title: 'ConnectivityApi',
      description:
        'The `ConnectivityApi` object provides methods for monitoring network connectivity. Access these methods through `api.connectivity` to check connection status and subscribe to connectivity changes.',
      type: 'ConnectivityApiContent',
    },
  ],
  category: 'APIs',
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
};

export default data;
