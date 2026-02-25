import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'FunctionSettings',
  description:
    'The FunctionSettings component configures metafield settings for [Shopify Functions](/docs/api/functions). Use FunctionSettings to create configuration interfaces that allow merchants to customize function behavior through structured input fields and controls.\n\nThis component provides a standardized layout for settings forms and integrates with the native save bar to handle form submission. For general form submission, use [Form](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/form).',
  requires:
    'the [Discount Function Settings API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/discount-function-settings-api), [Validation Settings API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/validation-settings-api), or [Order Routing Rule API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/order-routing-rule-api).',
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
    description:
      'Build a settings page for a [Shopify Function](/docs/api/functions) that saves configuration as metafields. This example uses `FunctionSettings` with `applyMetafieldsChange` to save a validation rule name entered in a [TextField](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield).',
    codeblock: {
      title: 'Configure function validation settings',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/FunctionSettings/examples/basic-functionsettings.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-functionsettings.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Collect multiple metafield values in a single settings form using [NumberField](/docs/api/admin-extensions/{API_VERSION}/components/forms/numberfield) and [TextField](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) components. This example manages minimum quantity, maximum quantity, and a custom error message, writing each change to its own metafield key through `applyMetafieldsChange`.',
        codeblock: {
          title: 'Manage multiple metafield settings',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/FunctionSettings/examples/functionsettings-multiple.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/functionsettings-multiple.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Use the `onSave` callback to notify your backend when the admin saves changes. This example configures a discount function with a title and type [ChoiceList](/docs/api/admin-extensions/{API_VERSION}/components/forms/choicelist), calling your validation endpoint during save and surfacing any errors through `onError`.',
        codeblock: {
          title: 'Validate settings on save',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/FunctionSettings/examples/functionsettings-save.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/functionsettings-save.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Group related settings logically:** Organize the input fields inside FunctionSettings with [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) and [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) components to create a clear, scannable settings interface.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- FunctionSettings doesn't include a built-in reset callback like [Form](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/form). The save bar's discard behavior is managed by the Shopify admin.
- FunctionSettings doesn't validate input values before save. You must implement your own validation logic and display errors on individual fields.
- Only one FunctionSettings component should be used per extension view. Each FunctionSettings binds to the admin's save bar, and multiple instances would create conflicting save states.`,
    },
  ],
  related: [],
};

export default data;
