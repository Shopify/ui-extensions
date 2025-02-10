import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Customer account UI extensions',
  description: `
  Customer account UI extensions let app developers build custom functionality that merchants can install at defined points on the **Order index**, **Order status**, and **Profile** pages in customer accounts.

  \n\n > Shopify Plus: \n>Some static extensions on the Profile page only render for B2B customers. B2B on Shopify is only available on the [Shopify Plus](https://www.shopify.com/plus) plan. [See B2B Profile targets](/api/customer-account-ui-extensions/unstable/extension-targets-overview#profile-b2b)
  `,
  id: 'customer-account-ui-extensions',
  image:
    '/assets/landing-pages/templated-apis/customer-account-ui-extensions/customer-account-ui.png',
  darkImage:
    '/assets/landing-pages/templated-apis/customer-account-ui-extensions/customer-account-ui-dark.png',
  mobileImage:
    '/assets/landing-pages/templated-apis/customer-account-ui-extensions/customer-account-ui-mobile.png',
  mobileDarkImage:
    '/assets/landing-pages/templated-apis/customer-account-ui-extensions/customer-account-ui-mobile-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'scaffolding-extension',
      title: 'Scaffolding an extension',
      sectionContent:
        'Use Shopify CLI to [generate a new extension](/apps/tools/cli/commands#generate-extension) in the directory of your app.',
      sectionCard: [
        {
          name: 'Getting started',
          subtitle: 'Navigate to',
          url: '/docs/apps/customer-accounts/getting-started',
          type: 'blocks',
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
      title: 'Extension targets',
      sectionContent: `Extension targets provide locations for customer account UI extensions to appear.
      \n\nExtension UIs are rendered using [remote UI](https://github.com/Shopify/remote-ui),
      a fast and secure environment for custom [(non-DOM)](#security) UIs.`,
      sectionCard: [
        {
          name: 'Extension targets',
          subtitle: 'Overview',
          url: '/api/customer-account-ui-extensions/extension-targets-overview',
          type: 'blocks',
        },
      ],
      image: 'extension-targets.png',
      altText:
        'The Profile page with a purple dotted-line box above the page title that says "Extension targets".',
      codeblock: {
        title: 'Extension targets',
        tabs: [
          {
            title: 'React',
            code: './examples/extension-targets-react.example.tsx',
            language: 'tsx',
          },
          {
            title: 'JavaScript',
            code: './examples/extension-targets-js.example.ts',
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
        "When you create a customer account UI extension, the shopify.extension.toml file is automatically generated in your customer account UI extension directory. It contains the extension's configuration, which includes the extension name, extension targets, metafields, capabilities and settings definition.",
      sectionCard: [
        {
          name: 'Configuration guide',
          subtitle: 'Navigate to',
          url: '/api/customer-account-ui-extensions/configuration',
          type: 'gear',
        },
      ],
      codeblock: {
        title: 'shopify.ui.extension.example.toml',
        tabs: [
          {
            title: 'toml',
            code: './examples/configure-example.example.toml',
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
        "APIs enable customer account UI extensions to get information about the customer or related objects and to perform actions. For example, you can use APIs to retrieve previous orders of the customer so that you can offer related products as upsells.\n\nExtensions use JavaScript to read and write data and call external services, and natively render UIs built using Shopify's checkout and customer account components.",
      sectionCard: [
        {
          name: 'Customer account UI extensions APIs',
          subtitle: 'Navigate to',
          url: '/api/customer-account-ui-extensions/apis',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Extension APIs',
        tabs: [
          {
            title: 'React',
            code: './examples/extension-apis-react.example.tsx',
            language: 'tsx',
          },
          {
            title: 'JavaScript',
            code: './examples/extension-apis-js.example.ts',
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
      altText:
        "An animation of a card that contains an image, heading, description, and button, shifting and transforming into highly customized versions of the same UI to reflect each merchant's unique branding.",
      sectionContent: `Customer account UI extensions declare their interface using supported UI components. Shopify renders the UI natively so it's performant, accessible, and works in all of customer account supported browsers.
      \n\nComponents are designed to be flexible, enabling you to layer and mix them to create highly-customized app extensions that feel seamless within the customer account experience. All components that will inherit a merchant's brand settings and the CSS cannot be altered or overridden.
      \n\nTo build customer account UI extensions, you can use checkout components, and customer account components.`,
      sectionCard: [
        {
          name: 'Checkout components',
          subtitle: 'API Reference',
          url: '/api/checkout-ui-extensions/components',
          type: 'blocks',
        },
        {
          name: 'Customer account components',
          subtitle: 'API Reference',
          url: '/api/customer-account-ui-extensions/components',
          type: 'blocks',
        },
        {
          name: 'Figma UI kit',
          subtitle: 'UI Reference',
          url: 'https://www.figma.com/community/file/1304881365343613949/checkout-and-account-components',
          type: 'library',
        },
      ],
      codeblock: {
        title: 'UI components',
        tabs: [
          {
            title: 'React',
            code: './examples/ui-components-react.example.tsx',
            language: 'tsx',
          },
          {
            title: 'JavaScript',
            code: './examples/ui-components-js.example.ts',
            language: 'js',
          },
        ],
      },
      initialLanguage: 'tsx',
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'custom-protocols',
      title: 'Custom protocols',
      sectionContent: `Custom protocols make it easier to navigate to common locations, and construct URLs.`,
      accordionContent: [
        {
          title: 'Shopify protocol',
          description:
            'Use the `shopify:customer-account` protocol when you want to construct a URL with a root of customer accounts.',
          codeblock: {
            title: 'shopify:customer-account',
            tabs: [
              {
                title: 'Link to Order Index page',
                code: './examples/custom-protocols/customer-account-link.example.tsx',
                language: 'tsx',
              },
              {
                title: 'Fetch data',
                code: './examples/custom-protocols/customer-account-fetch-data.example.ts',
                language: 'js',
              },
            ],
          },
          initialLanguage: 'tsx',
        },
        {
          title: 'Relative URLs',
          description:
            'Relative URLs are relative to your extension and are useful when you want to link to a route in your extension.',
          codeblock: {
            title: '/relative/urls',
            tabs: [
              {
                title: 'Link to route in your extension',
                code: './examples/custom-protocols/relative-urls-link.example.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Extension Protocol',
          description:
            'Triggers a navigation to an extension using the `extension:` protocol. \
The handle is the handle of the extension that will be navigated to in \
the same application. Build a [full-page extension](/docs/api/customer-account-ui-extensions/extension-targets-overview#full-page-extension-target) to create a new page in \
customer accounts and handle the navigation.',
          codeblock: {
            title: 'extension:handle',
            tabs: [
              {
                title: 'Link to a route of an extension',
                code: './examples/custom-protocols/extension-link.example.tsx',
                language: 'tsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'security',
      title: 'Security',
      sectionContent: `
Customer account UI extensions are a safe and secure way to customize the appearance and functionality of the customer account pages without compromising the security of customer data.
- They run in an isolated sandbox, separate from the customer account page and other UI extensions.
- They don't have access to sensitive payment information or the customer account page itself (HTML or other assets).
- They are limited to specific UI components and APIs that are exposed by the platform.
- They have limited access to [global web APIs](https://github.com/Shopify/ui-extensions/blob/unstable/documentation/runtime-environment.md).
- Apps that wish to access [protected customer data](/docs/apps/store/data-protection/protected-customer-data), must submit an application and are subject to strict security guidelines and review proccesses by Shopify.
`,
      sectionNotice: [
        {
          title: 'Constraints',
          sectionContent: `
You can't override the CSS for UI components. The customer account UI extension will always render the merchant's own branding as shown in the image in the UI components section above.

Customer account UI extensions don't have access to the DOM and can't return DOM nodes. They can't return \`<div>\` elements, for example. Building an arbitrary tree of HTML and loading additional scripts using script tags are also not supported.
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
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'troubleshooting',
      title: 'Troubleshooting',
      sectionContent:
        'Find an end-to-end guide to testing your extensions in [Testing customer account UI extensions](https://shopify.dev/docs/apps/customer-accounts/best-practices/testing-ui-extensions).',
    },
    {
      type: 'Generic',
      anchorLink: 'tutorials',
      title: 'Tutorials',
      sectionContent:
        'Learn how to build customer account UI extensions using APIs and UI components.',
      sectionCard: [
        {
          name: 'Inline extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/customer-accounts/build-inline-extensions/order-status',
          type: 'blocks',
        },
        {
          name: 'Order action menu extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/customer-accounts/order-action-menu-extensions/build-order-action-menu-extensions',
          type: 'blocks',
        },
        {
          name: 'Full-page extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/customer-accounts/full-page-extensions/build-full-page-extensions',
          type: 'blocks',
        },
        {
          name: 'Building metafield writes into extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/build/customer-accounts/metafields',
          type: 'blocks',
        },
        {
          name: 'Build Pre-auth Order Status page extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/build/customer-accounts/pre-auth-order-status-page-extensions/build-pre-auth-order-status-page-extensions',
          type: 'blocks',
        },
      ],
    },
    {
      type: 'Resource',
      anchorLink: 'resources',
      title: 'Resources',
      resources: [
        {
          name: 'UX guidelines',
          subtitle:
            'Best practices for designing consistent and useful customer account UI extensions.',
          url: '/docs/apps/customer-accounts/best-practices/ux-guidelines',
          type: 'star',
        },
        {
          name: 'Tutorials',
          // eslint-disable-next-line no-warning-comments
          // TODO: update this section once tutorials are ready
          subtitle:
            'Learn how to build inline, full-page, or order action menu extensions in customer accounts.',
          url: '/docs/apps/customer-accounts',
          type: 'growth',
        },
        {
          name: 'Localizing UI extensions',
          subtitle:
            'Learn how to localize your customer account UI extension for international merchants and customers.',
          url: '/api/customer-account-ui-extensions/apis/localization',
          type: 'globe',
        },
      ],
    },
  ],
};

export default data;
