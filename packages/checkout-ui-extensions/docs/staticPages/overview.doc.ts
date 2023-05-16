import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Checkout UI extensions',
  description: `Checkout UI extensions let app developers build custom functionality that merchants can install
    at defined points in the checkout flow, including product information, shipping, payment,
    order summary, and Shop Pay.
    \n\n > Shopify Plus: \n>Checkout UI extensions are available only to [Shopify Plus](https://www.shopify.com/plus) merchants.`,
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
            code: './examples/scaffolding-npm.bash',
            language: 'bash',
          },
          {
            title: 'yarn',
            code: './examples/scaffolding-yarn.bash',
            language: 'bash',
          },
          {
            title: 'pnpm',
            code: './examples/scaffolding-pnpm.bash',
            language: 'bash',
          },
        ],
      },
      initialLanguage: 'bash',
    },
    {
      type: 'Generic',
      anchorLink: 'extension-points',
      title: 'Extension points',
      sectionContent: `Extension points provide locations where merchants can insert custom content.
        Static extension points are tied to core checkout features like contact information, shipping methods, and order summary line items.
        Dynamic extension points can be displayed at any point in the checkout process and will always render regardless of which checkout features are available.
        An example is a field to capture order notes from the customer.
        \n\nExtension UIs are rendered using [remote UI](https://github.com/Shopify/remote-ui),
        a fast and secure environment for custom [(non-DOM)](#constraints) UIs.`,
      sectionCard: [
        {
          name: 'Extension points',
          subtitle: 'Overview',
          url: '/api/checkout-ui-extensions/extension-points-overview',
          type: 'blocks',
        },
      ],
      image: 'extension-points.png',
      codeblock: {
        title: 'Extension points',
        tabs: [
          {
            title: 'React',
            code: './examples/extension-points-react.tsx',
            language: 'tsx',
          },
          {
            title: 'JS',
            code: './examples/extension-points-js.ts',
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
        "When you create a checkout UI extension, the `shopify.ui.extension.toml` file is automatically generated in your checkout UI extension directory.  It contains the extension's configuration, which includes the extension name, extension points, metafields, capabilities, and settings definition.",
      sectionCard: [
        {
          name: 'Configuration guide',
          subtitle: 'Learn more',
          url: '/api/checkout-ui-extensions/configuration',
          type: 'gear',
        },
      ],
      codeblock: {
        title: 'shopify.ui.extension.toml',
        tabs: [
          {
            title: 'toml',
            code: './examples/configure-example.toml',
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
          url: '/api/checkout-ui-extensions/extension-points-api',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Extension APIs',
        tabs: [
          {
            title: 'React',
            code: './examples/extension-apis-react.tsx',
            language: 'tsx',
          },
          {
            title: 'JS',
            code: './examples/extension-apis-js.ts',
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
        "Checkout UI extensions provide UI components that a [rendering extension](/api/checkout-ui-extensions/extension-points-api#renderextension) can use to build an interface. Shopify renders the UI natively, so it's performant, accessible, and works in all of checkout's supported browsers. \n\nCheckout components are designed to be flexible, enabling you to layer and mix them to create highly-customized app extensions that feel seamless within the checkout experience. All components inherit a merchant's brand settings and the CSS cannot be altered or overridden.",
      sectionCard: [
        {
          name: 'Component library',
          subtitle: 'API reference',
          url: '/api/checkout-ui-extensions/components',
          type: 'blocks',
        },
        {
          name: 'Figma UI kit',
          subtitle: 'UI Reference',
          url: 'https://www.figma.com/community/file/1121180079120732846',
          type: 'setting',
        },
      ],
      codeblock: {
        title: 'UI components',
        tabs: [
          {
            title: 'React',
            code: './examples/ui-components-react.tsx',
            language: 'tsx',
          },
          {
            title: 'JS',
            code: './examples/ui-components-js.ts',
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
- They have limited access to global web APIs.
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
          name: 'Checkout branding',
          subtitle: 'Learn more',
          url: '/docs/apps/checkout/advanced-checkout-branding',
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
          url: 'https://github.com/Shopify/remote-ui',
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
