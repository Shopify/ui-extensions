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
      'Learn how to monitor Internet connectivity status and respond to network changes.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForConnectivityApi(
          'Monitor Internet connectivity status',
          'subscribe',
        ),
        description:
          'Subscribe to connectivity state changes to build network-aware extensions that respond to connectivity changes. This example shows how to use `shopify.connectivity.subscribe()` to receive real-time notifications when the device goes online or offline, allowing you to adapt your UI or disable features when Internet access is unavailable.',
      },
    ],
  },
};

export default data;
