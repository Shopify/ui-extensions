import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForConnectivityApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'connectivity-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Connectivity API',
  description:
    'The Connectivity API enables POS UI extensions to retrieve device connectivity information, such as whether the device has an internet connection.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ConnectivityApi',
      description: '',
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
