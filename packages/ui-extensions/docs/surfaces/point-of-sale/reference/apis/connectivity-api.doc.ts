import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

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
        codeblock: generateCodeBlock(
          'Subscribe to connectivity changes.',
          'connectivity-api',
          'subscribable',
        ),
      },
    ],
  },
};

export default data;
