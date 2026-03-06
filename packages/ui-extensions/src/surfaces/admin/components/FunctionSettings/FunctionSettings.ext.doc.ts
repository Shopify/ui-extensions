import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from '../../../../docs/shared/components/FunctionSettings';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  requires:
    'the [Discount Function Settings API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/discount-function-settings-api), [Validation Settings API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/validation-settings-api), or [Order Routing Rule API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/order-routing-rule-api).',
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/form.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Label settings clearly:** Instead of technical names like **Max threshold**, use merchant-friendly labels like **Maximum discount amount** or **Order value limit**.
- **Validate with specific feedback:** Check that percentages are between 0-100, that monetary values are positive, and that required fields are filled. Provide clear error messages when validation fails.
- **Explain impact with field details:** Use the \`details\` property on individual field components (for example, [text field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/text-field) or [number field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/number-field)) to explain what each setting does and how it affects the user's workflow.
- **Set appropriate defaults:** Pre-select the most common configuration to reduce setup friction for merchants.
- **Group related settings:** Use sections to organize settings by function so merchants can find what they need quickly.`,
    },
  ],
  definitions: [
    {
      title: 'Events',
      description:
        'The function settings component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'FormEvents',
    },
  ],
  defaultExample: {
    description:
      'Configure a [Shopify Function](/docs/api/functions/) with a settings form that integrates with the native save bar. This example shows a [number field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/number-field) for a discount percentage input inside a function settings component.',
    codeblock: {
      title: 'Add a settings field for a function',
      tabs: [
        {
          title: '',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: '',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Organize settings into repeating groups for tiered or multi-level configurations. This example uses [sections](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/layout-and-structure/section) to define two volume discount tiers, each with a quantity threshold and percentage.',
            codeblock: {
              title: 'Set up tiered discount rules',
              tabs: [
                {
                  title: '',
                  code: './examples/with-multiple-settings.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Display validation errors when settings values are out of range or missing. This example shows required [number fields](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/number-field) with inline error messages.',
            codeblock: {
              title: 'Show validation errors on settings',
              tabs: [
                {
                  title: '',
                  code: './examples/with-validation.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Let merchants choose from predefined options to control function behavior. This example uses a [select](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/select) dropdown to pick a discount target and a [text field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/text-field) for a filter value.',
            codeblock: {
              title: 'Add a select dropdown to settings',
              tabs: [
                {
                  title: '',
                  code: './examples/with-select-options.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Let merchants enable or disable a feature with a [switch](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/switch) and configure its threshold. This example pairs a toggle for free shipping with a minimum order amount [number field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/number-field).',
            codeblock: {
              title: 'Toggle a feature with a switch',
              tabs: [
                {
                  title: '',
                  code: './examples/with-toggle.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
