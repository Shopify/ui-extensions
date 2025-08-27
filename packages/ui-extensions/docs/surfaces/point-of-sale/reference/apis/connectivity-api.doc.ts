import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForConnectivityApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'connectivity-api', fileName);

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
        codeblock: generateJsxCodeBlockForConnectivityApi(
          'Subscribe to connectivity changes.',
          'subscribe',
        ),
      },
    ],
  },
};

export default data;
