import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getStandardApiExampleGroups,
  getExample,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
  getLinksByTag,
} from '../../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'StandardApi',
  overviewPreviewDescription: 'The base API for all extension points.',
  description: 'This base API object is provided to all extension points.',
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties and functions',
      description:
        'See [examples](#examples) for more information on how to use the API.',
      type: 'StandardApi',
    },
  ],
  defaultExample: getExample('default', ['react', 'js'], __dirname),
  examples: {
    description:
      'Learn how to use the API with JavaScript (JS) and React. See [React Hooks](../react-hooks) for all available hooks.',
    exampleGroups: getStandardApiExampleGroups(['react', 'js'], __dirname),
  },
  related: getLinksByTag('apis', 'StandardApi'),
};

export default data;
