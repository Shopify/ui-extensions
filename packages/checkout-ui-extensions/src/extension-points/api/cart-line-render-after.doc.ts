import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  getStandardApiExampleGroups,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CartLineRenderAfterApi',
  overviewPreviewDescription:
    'The API provided to extensions which target cart line items.',
  description:
    'This API object is provided to extensions registered for the `Checkout::CartLineDetails::RenderAfter` extension point.',
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties and functions',
      description:
        'See [examples](#examples) for more information on how to use the API.',
      type: 'CartLineRenderAfterApi',
    },
  ],
  defaultExample: getExample(
    'cart-line-render-after',
    ['react', 'js'],
    __dirname,
  ),
  examples: {
    description:
      'Learn how to use the API with JavaScript (JS) and React. See [React Hooks](../react-hooks) for all available hooks.',
    exampleGroups: getStandardApiExampleGroups(['react', 'js'], __dirname),
  },
  related: getLinksByTag('apis', 'CartLineRenderAfterApi'),
};

export default data;
