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
  category: 'APIs',
  related: [],
  examples: {
    description:
      'Learn how to monitor network connectivity status and respond to connectivity changes.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForConnectivityApi(
          'Monitor network connectivity changes',
          'subscribe',
        ),
        description:
          'Subscribe to connectivity changes to monitor network status in real time. This example demonstrates using `shopify.connectivity.subscribe()` and `shopify.connectivity.connected` to detect when the device goes online or offline, enabling adaptive behavior for offline-capable features or network-dependent operations.',
      },
    ],
  },
};

export default data;
