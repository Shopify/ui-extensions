import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order Routing Rule API',
  description:
    'This API is available to extensions that render in the order routing settings using the `admin.settings.order-routing-rule.render` target.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Configure fulfillment location priorities for order routing. Set preferred and fallback locations using metafields to control where orders are routed.',
    codeblock: {
      title: 'Configure location priority',
      tabs: [
        {
          code: './examples/configure-location-priority.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'OrderRoutingRuleApi',
      description: '',
      type: 'OrderRoutingRuleApi',
    },
  ],
  examples: {
    description: 'Configure order routing rules',
    examples: [
      {
        description:
          'Set routing criteria including distance limits, inventory checks, and location restrictions. Configure multiple rule parameters in a single batch operation.',
        codeblock: {
          title: 'Set routing criteria',
          tabs: [
            {
              code: './examples/set-routing-criteria.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Remove deprecated settings from routing rules. Clean up old configuration metafields while preserving the rule priority and remaining settings.',
        codeblock: {
          title: 'Remove deprecated settings',
          tabs: [
            {
              code: './examples/remove-deprecated-settings.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
};

export default data;
