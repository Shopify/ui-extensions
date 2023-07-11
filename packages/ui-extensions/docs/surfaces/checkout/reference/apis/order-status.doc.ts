import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'OrderStatusApi',
  overviewPreviewDescription:
    'The API provided to extension points on the order status page.',
  description: `
This API object is provided to extensions registered for the extension points that appear exclusively on the order status page.

It extends the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi) and provides access to an order object.
`,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See the [StandardApi examples](/docs/api/checkout-ui-extensions/apis/standardapi#examples) for more information on how to use the API.',
      type: 'OrderStatusApi',
    },
  ],
  defaultExample: getExample('order-status/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'OrderStatusApi'),
};

export default data;
