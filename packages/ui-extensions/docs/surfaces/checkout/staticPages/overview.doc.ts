import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Checkout UI extensions',
  description: `Checkout UI extensions let app developers build custom functionality that merchants can install
    at defined points in the checkout flow, including product information, shipping, payment,
    order summary, and Shop Pay.
    \n\n > Shopify Plus: \n>Checkout UI extensions for the information, shipping and payment step are available only to stores on a [Shopify Plus](https://www.shopify.com/plus) plan.`,
  id: 'checkout-ui-extensions',
  image:
    '/assets/landing-pages/templated-apis/checkout-ui-extensions/checkout-ui.png',
  darkImage:
    '/assets/landing-pages/templated-apis/checkout-ui-extensions/checkout-ui-dark.png',
  mobileImage:
    '/assets/landing-pages/templated-apis/checkout-ui-extensions/checkout-ui-mobile.png',
  mobileDarkImage:
    '/assets/landing-pages/templated-apis/checkout-ui-extensions/checkout-ui-mobile-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'scaffolding-extension',
      title: 'Scaffolding an extension',
      sectionContent: `Use the Shopify CLI to [generate a new extension](/docs/api/shopify-cli/app/app-generate-extension) in the directory of your app.

Make sure you’re using Shopify CLI \`v3.85.3\` or higher. You can check your version by running \`shopify version\`.
        `,
      codeblock: {
        title: 'Shopify CLI',
        tabs: [
          {
            code: './examples/scaffolding.example.bash',
            language: 'bash',
          },
        ],
      },
      initialLanguage: 'bash',
    },
    {
      type: 'Generic',
      anchorLink: 'eslint-configuration',
      title: 'Optional ESLint configuration',
      sectionContent: `
If your app is using ESLint, update your configuration to include the new global \`shopify\` object.
        `,
      codeblock: {
        title: '.eslintrc.cjs',
        tabs: [
          {
            code: './examples/eslint-configuration.example.ts',
            language: 'js',
          },
        ],
      },
      initialLanguage: 'js',
    },
    {
      type: 'Generic',
      anchorLink: 'configuration-file',
      title: 'Configuration file',
      sectionContent: `When you create a UI extension, the \`shopify.extension.toml\` file is generated in your extension directory. Use this file to configure your extension name, extension targets, metafields, capabilities, and settings definition.

Extension targets provide locations where merchants can insert custom content. Static extension targets are tied to core checkout features like contact information, shipping methods, and order summary line items. Block targets can display at any point in the checkout process and will always render regardless of which checkout features are available. An example is a field to capture order notes from the customer.`,
      sectionCard: [
        {
          name: 'Configuration guide',
          subtitle: 'Learn more',
          url: '/docs/api/checkout-ui-extensions/configuration',
          type: 'gear',
        },
        {
          name: 'Extension targets',
          subtitle: 'Overview',
          url: '/docs/api/checkout-ui-extensions/extension-targets-overview',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'shopify.extension.toml',
        tabs: [
          {
            code: './examples/configuration/default.example.toml',
            language: 'toml',
          },
        ],
      },
      initialLanguage: 'yaml',
    },
    {
      type: 'Generic',
      anchorLink: 'extension-functions',
      title: 'Extension functions',
      sectionContent: `Checkout will execute the module’s default export so it can render a user interface.

Extension UIs are powered by [Remote DOM](https://github.com/Shopify/remote-dom/), a fast and secure environment for custom [(non-DOM)](#security) UIs.`,
      sectionCard: [],
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/extension-functions.example.tsx',
            language: 'tsx',
          },
        ],
      },
      initialLanguage: 'tsx',
    },
    {
      type: 'Generic',
      title: 'Preact by default',
      sectionContent: `UI Extensions are scaffolded with [Preact](https://preactjs.com/) by default. This means you can use Preact patterns and principles within your extension.

Since Preact is included as a standard dependency, you have access to all of its features including [hooks](https://preactjs.com/guide/v10/hooks/) like \`useState\` and \`useEffect\` for managing component state and side effects.

You can also use [Preact Signals](https://preactjs.com/guide/v10/signals/) for reactive state management, and take advantage of standard web APIs just like you would in a regular Preact application.
        `,
      anchorLink: 'preact-by-default',
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/preact-by-default.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'extension-apis',
      title: 'Extension APIs',
      sectionContent: `The platform defines a global \`shopify\` object that contains all properties and methods available to UI extensions.

These APIs enable UI extensions to get information about the checkout or related objects and to perform actions. For example, you can retrieve what’s in customer carts and offer related products.

APIs with a \`value\` property are [Preact Signals](https://preactjs.com/guide/v10/signals/). Preact will automatically re-render your extension as values change.
`,
      sectionCard: [
        {
          name: 'Checkout extensions API',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/apis',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/extension-apis.example.tsx',
            language: 'tsx',
          },
        ],
      },
      initialLanguage: 'tsx',
    },
    {
      type: 'Generic',
      anchorLink: 'ui-components',
      title: 'UI components',
      sectionContent: `Checkout UI extensions declare their interface using [Polaris web components](/docs/api/checkout-ui-extensions/using-polaris-components). Shopify renders the UI natively, so it’s performant, accessible, and works in all of checkout’s supported browsers.

Checkout components are designed to be flexible, enabling you to layer and mix them to create highly-customized app extensions that feel seamless within the checkout experience. All components inherit a merchant’s brand settings and the CSS cannot be altered or overridden.`,
      sectionCard: [
        {
          name: 'Component library',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/latest/web-components',
          type: 'blocks',
        },
        {
          name: 'Figma UI kit',
          subtitle: 'UI Reference',
          url: 'https://www.figma.com/community/file/1554582792754361051',
          type: 'setting',
        },
      ],
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/ui-components.example.tsx',
            language: 'tsx',
          },
        ],
      },
      initialLanguage: 'tsx',
    },
    {
      type: 'Generic',
      anchorLink: 'security',
      title: 'Security',
      sectionContent: `
Checkout UI extensions are a safe and secure way to customize the appearance and functionality of the checkout page without compromising the security of checkout or customer data.
- They run in an isolated sandbox, separate from the checkout page and other UI extensions.
- They don't have access to sensitive payment information or the checkout page itself (HTML or other assets).
- They are limited to specific UI components and APIs that are exposed by the platform.
- They have limited access to [global web APIs](https://github.com/Shopify/ui-extensions/blob/2025-10/documentation/runtime-environment.md).
- Apps that wish to access [protected customer data](/docs/apps/store/data-protection/protected-customer-data), must submit an application and are subject to strict security guidelines and review proccesses by Shopify.
`,
      sectionNotice: [
        {
          title: 'Constraints',
          sectionContent: `
You can’t override the CSS for UI components. The checkout UI will always render the merchant’s own branding.

Checkout UI extensions don’t have access to the real checkout DOM and can’t render arbitrary HTML such as \`<div>\` elements or \`<script>\` tags, etc. They can only render custom HTML elements provided by Shopify.
`,
          type: 'info',
        },
      ],
      sectionCard: [
        {
          name: 'Rendering extensions',
          subtitle: 'Learn more',
          url: 'https://shopify.engineering/remote-rendering-ui-extensibility',
          type: 'tutorial',
        },
        {
          name: 'Checkout styling',
          subtitle: 'Learn more',
          url: '/docs/apps/checkout/styling',
          type: 'tutorial',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
As of \`2025-10\`, UI extensions have the following limitations:
- **File size limit**: Extensions are limited to a maximum of 64 KB when deployed. This limit helps ensure fast loading times and optimal performance for buyers during checkout.
`,
      sectionNotice: [
        {
          title: 'Note',
          sectionContent: `
The 64 KB limit applies to the compiled extension bundle size upon deployment.
`,
          type: 'info',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'troubleshooting',
      title: 'Troubleshooting',
      sectionContent:
        "Find an end-to-end guide to testing your extensions in [Testing checkout UI extensions](/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).\n\nIf you're encountering errors when you run `dev` for an app that contains checkout UI extensions, follow this [troubleshooting guide](/apps/build/checkout/localized-checkout-ui-extensions/localize#troubleshooting).",
      sectionCard: [
        {
          name: 'Troubleshooting guide',
          subtitle: 'Learn more',
          url: '/apps/build/checkout/localized-checkout-ui-extensions/localize#troubleshooting',
          type: 'apps',
        },
      ],
    },
    {
      type: 'Resource',
      anchorLink: 'resources',
      title: 'Resources',
      resources: [
        {
          name: 'remote-dom',
          subtitle:
            'Learn more about the underlying technology that powers checkout UI extensions.',
          url: 'https://github.com/Shopify/remote-dom/',
          type: 'gitHub',
        },
        {
          name: 'UX guidelines',
          subtitle:
            "Use our UX guidelines when you're designing your checkout experiences to ensure that they're trustworthy, efficient, and considerate.",
          url: '/apps/checkout/checkout-ux-guidelines',
          type: 'star',
        },
        {
          name: 'Localization',
          subtitle:
            'You can use JavaScript APIs to access translations and localize UI extensions for international merchants and customers.',
          url: '/apps/checkout/localize-ui-extensions',
          type: 'globe',
        },
        {
          name: 'Tutorials',
          subtitle:
            'Check out our tutorials on how to build payment or delivery customizations, product offers, custom banners and more.',
          url: '/apps/checkout',
          type: 'growth',
        },
      ],
    },
  ],
};

export default data;
