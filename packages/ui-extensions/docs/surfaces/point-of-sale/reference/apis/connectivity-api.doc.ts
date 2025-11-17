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
    description: 'Examples of using the Connectivity API',
    examples: [
      {
        codeblock: generateCodeBlockForConnectivityApi(
          'Subscribe to connectivity changes.',
          'subscribable',
        ),
      },
    ],
  },
};

export default data;
