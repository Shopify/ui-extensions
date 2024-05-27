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
      sectionContent:
        'Use Shopify CLI to [generate a new extension](/apps/tools/cli/commands#generate-extension) in the directory of your app.',
      sectionCard: [
        {
          name: 'Getting started video',
          subtitle: 'Watch',
          url: 'https://www.youtube.com/watch?v=jr_AIUDUSMw',
          type: 'youtube',
        },
      ],
      codeblock: {
        title: 'Scaffolding',
        tabs: [
          {
            title: 'npm',
            code: './examples/scaffolding-npm.example.bash',
            language: 'bash',
          },
          {
            title: 'yarn',
            code: './examples/scaffolding-yarn.example.bash',
            language: 'bash',
          },
          {
            title: 'pnpm',
            code: './examples/scaffolding-pnpm.example.bash',
            language: 'bash',
          },
        ],
      },
      initialLanguage: 'bash',
    },
    {
      type: 'Generic',
      anchorLink: 'extension-targets',
      title: 'Extension Targets',
      sectionContent: `Extension targets provide placements where merchants can insert custom content.
        Static extension targets are tied to core checkout features like contact information, shipping methods, and order summary line items.
        Block extension targets can be displayed at any point in the checkout process and will always render regardless of which checkout features are available.
        An example is a field to capture order notes from the customer.
        \n\nExtension UIs are rendered using [remote UI](https://github.com/Shopify/remote-dom/tree/remote-ui),
        a fast and secure environment for custom [(non-DOM)](#security) UIs.`,
      sectionCard: [
        {
          name: 'Extension targets',
          subtitle: 'Overview',
          url: '/docs/api/checkout-ui-extensions/extension-targets-overview',
          type: 'blocks',
        },
      ],
      image: 'extension-targets.png',
      codeblock: {
        title: 'Extension targets',
        tabs: [
          {
            title: 'React',
            code: './examples/extension-targets.example.tsx',
            language: 'tsx',
          },
          {
            title: 'JS',
            code: './examples/extension-targets.example.ts',
            language: 'js',
          },
        ],
      },
      initialLanguage: 'tsx',
    },
    {
      type: 'Generic',
      anchorLink: 'configuration-file',
      title: 'Configuration file',
      sectionContent:
        "When you create a checkout UI extension, the `shopify.extension.toml` file is automatically generated in your checkout UI extension directory.  It contains the extension's configuration, which includes the extension name, extension targets, metafields, capabilities, and settings definition.",
      sectionCard: [
        {
          name: 'Configuration guide',
          subtitle: 'Learn more',
          url: '/docs/api/checkout-ui-extensions/configuration',
          type: 'gear',
        },
      ],
      codeblock: {
        title: 'shopify.extension.toml',
        tabs: [
          {
            title: 'toml',
            code: './examples/configuration/default.example.toml',
            language: 'toml',
          },
        ],
      },
      initialLanguage: 'yaml',
    },
    {
      type: 'Generic',
      anchorLink: 'extension-apis',
      title: 'Extension APIs',
      sectionContent:
        "APIs enable checkout UI extensions to get information about the checkout or related objects and to perform actions. For example, you can use the APIs to retrieve what's in customer carts so that you can offer related products. \n\nExtensions use JavaScript to read and write data and call external services, and natively render UIs built using Shopify's checkout components.",
      sectionCard: [
        {
          name: 'Checkout extensions API',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/apis',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Extension APIs',
        tabs: [
          {
            title: 'React',
            code: './examples/extension-apis.example.tsx',
            language: 'tsx',
          },
          {
            title: 'JS',
            code: './examples/extension-apis.example.ts',
            language: 'js',
          },
        ],
      },
      initialLanguage: 'tsx',
    },
    {
      type: 'Generic',
      anchorLink: 'ui-components',
      title: 'UI components',
      image: 'ui-components.gif',
      sectionContent:
        "Checkout UI extensions declare their interface using supported UI components. Shopify renders the UI natively, so it's performant, accessible, and works in all of checkout's supported browsers. \n\nCheckout components are designed to be flexible, enabling you to layer and mix them to create highly-customized app extensions that feel seamless within the checkout experience. All components inherit a merchant's brand settings and the CSS cannot be altered or overridden.",
      sectionCard: [
        {
          name: 'Component library',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/components',
          type: 'blocks',
        },
        {
          name: 'Figma UI kit',
          subtitle: 'UI Reference',
          url: 'https://www.figma.com/community/file/1304881365343613949/checkout-and-account-components',
          type: 'setting',
        },
      ],
      codeblock: {
        title: 'UI components',
        tabs: [
          {
            title: 'React',
            code: './examples/ui-components.example.tsx',
            language: 'tsx',
          },
          {
            title: 'JS',
            code: './examples/ui-components.example.ts',
            language: 'js',
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
- They have limited access to [global web APIs](https://github.com/Shopify/ui-extensions/blob/unstable/documentation/runtime-environment.md).
- Apps that wish to access [protected customer data](/docs/apps/store/data-protection/protected-customer-data), must submit an application and are subject to strict security guidelines and review proccesses by Shopify.
`,
      sectionNotice: [
        {
          title: 'Constraints',
          sectionContent: `
You can't override the CSS for UI components. The checkout UI will always render the merchant's own branding as shown in the image in the UI components section above.

Checkout UI extensions don't have access to the DOM and can't return DOM nodes. They can't return \`<div>\` elements, for example. Building an arbitrary tree of HTML and loading additional scripts using script tags are also not supported.
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
      anchorLink: 'troubleshooting',
      title: 'Troubleshooting',
      sectionContent:
        "Find an end-to-end guide to testing your extensions in [Testing checkout UI extensions](/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).\n\nIf you're encountering errors when you run `dev` for an app that contains checkout UI extensions, follow this [troubleshooting guide](/apps/checkout/delivery-instructions/getting-started#troubleshooting).",
      sectionCard: [
        {
          name: 'Troubleshooting guide',
          subtitle: 'Learn more',
          url: '/apps/checkout/delivery-instructions/getting-started#troubleshooting',
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
          name: 'remote-ui',
          subtitle:
            'Learn more about the underlying technology that powers checkout UI extensions.',
          url: 'https://github.com/Shopify/remote-dom/tree/remote-ui',
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
