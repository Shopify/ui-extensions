import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'FunctionSettings',
  description:
    'The FunctionSettings component configures metafield settings for [Shopify Functions](/docs/api/functions). Use FunctionSettings to create configuration interfaces that allow merchants to customize function behavior through structured input fields and controls.\n\nThis component provides a standardized layout for settings forms and integrates with the native save bar to handle form submission. For general form submission, use [Form](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/form).',
  requires:
    'the [Validation Settings API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/validation-settings-api) or [Order Routing Rule API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/order-routing-rule-api).',
  thumbnail: 'form-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the FunctionSettings component.',
      type: 'FunctionSettingsProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'form-default.png',
    codeblock: {
      title: 'Simple function settings form implementation',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/FunctionSettings/examples/basic-functionsettings.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-functionsettings.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use FunctionSettings instead of Form for Shopify Functions:** FunctionSettings provides Function-specific error handling and integrates with the metafield configuration flow. Use it in any extension target related to Shopify Function settings.
- **Group related settings logically:** Organize the input fields inside FunctionSettings with [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) and [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) components to create a clear, scannable settings interface.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- FunctionSettings doesn't include a built-in reset callback like [Form](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/form). The save bar's discard behavior is managed by the Shopify admin.
- FunctionSettings doesn't validate input values before save. You must implement your own validation logic and display errors on individual fields.
- Only one FunctionSettings component should be used per extension view. Nesting or duplicating FunctionSettings isn't supported.`,
    },
  ],
  related: [],
};

export default data;
