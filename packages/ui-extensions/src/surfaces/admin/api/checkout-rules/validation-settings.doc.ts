import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Validation Settings API',
  description:
    'This API is available Validation Settings extensions. Refer to the [tutorial](/docs/apps/checkout/validation/create-complex-validation-rules) for more information. Note that the [`FunctionSettings`](/docs/api/admin-extensions/components/forms/functionsettings) component is required to build Validation Settings extensions.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'applyMetafieldChange',
      description: 'Applies a change to the validation settings.',
      type: 'ApplyMetafieldChange',
    },
    {
      title: 'data',
      description: 'The object that exposes the validation with its settings.',
      type: 'ValidationData',
    },
  ],
  category: 'API',
  related: [],
};

export default data;
