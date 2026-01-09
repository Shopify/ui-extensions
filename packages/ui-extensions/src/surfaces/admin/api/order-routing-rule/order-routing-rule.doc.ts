import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order Routing Rule API',
  description:
    'This API is available to extensions that render in the order routing settings using the `admin.settings.order-routing-rule.render` target.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'OrderRoutingRuleApi',
      description: '',
      type: 'OrderRoutingRuleApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
};

export default data;
