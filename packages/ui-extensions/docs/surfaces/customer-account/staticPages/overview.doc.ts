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
      sectionContent: `When you create a customer account UI extension, the \`shopify.extension.toml\` file is automatically generated in your extension directory. Use this file to configure your extension name, extension targets, metafields, capabilities, and settings definition.

Extension targets provide locations where merchants can insert custom content. Static extension targets render immediately before or after most core customer account features. Block extension targets render between core customer account features. Block extensions are always rendered, regardless of what other elements of the customer account are present.`,
      sectionCard: [
        {
          name: 'Configuration guide',
          subtitle: 'Navigate to',
          url: '/api/customer-account-ui-extensions/configuration',
          type: 'gear',
        },
        {
          name: 'Extension targets',
          subtitle: 'Overview',
          url: '/api/customer-account-ui-extensions/extension-targets-overview',
          type: 'blocks',
        },
      ],
      image: 'extension-targets.png',
      codeblock: {
        title: 'shopify.extension.toml',
        tabs: [
          {
            code: './examples/configure-example.example.toml',
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
      sectionContent: `Customer account will execute the module’s default export so it can render a user interface.

Extension UIs are powered by [Remote DOM](https://github.com/Shopify/remote-dom/), a fast and secure environment for custom [(non-DOM)](#security) UIs.`,
      sectionCard: [],
      altText:
        'The Profile page with a purple dotted-line box above the page title that says "Extension targets".',
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/extension-functions.example.jsx',
            language: 'jsx',
          },
        ],
      },
      initialLanguage: 'jsx',
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

These APIs enable UI extensions to get information about the customer account or related objects and to perform actions. For example, you can retrieve what’s in an order and offer related products.

APIs with a \`value\` property are [Preact Signals](https://preactjs.com/guide/v10/signals/). Preact will automatically re-render your extension as values change.
`,
      sectionCard: [
        {
          name: 'Customer account UI extensions APIs',
          subtitle: 'Navigate to',
          url: '/api/customer-account-ui-extensions/apis',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/extension-apis.example.jsx',
            language: 'jsx',
          },
        ],
      },
      initialLanguage: 'jsx',
    },
    {
      type: 'Generic',
      anchorLink: 'ui-components',
      title: 'UI components',
      image: 'ui-components.gif',
      altText:
        "An animation of a card that contains an image, heading, description, and button, shifting and transforming into highly customized versions of the same UI to reflect each merchant's unique branding.",
      sectionContent: `Customer account UI extensions declare their interface using [web components](/docs/api/customer-account-ui-extensions/using-web-components). Shopify renders the UI natively, so it’s performant, accessible, and works in all of customer account’s supported browsers.

Customer account components are designed to be flexible, enabling you to layer and mix them to create highly-customized app extensions that feel seamless within the customer account experience. All components inherit a merchant’s brand settings and the CSS cannot be altered or overridden.`,
      sectionCard: [
        {
          name: 'Component library',
          subtitle: 'API Reference',
          url: '/api/customer-account-ui-extensions/web-components',
          type: 'blocks',
        },
        {
          name: 'Figma UI kit',
          subtitle: 'UI Reference',
          url: 'https://www.figma.com/community/file/1554582792754361051',
          type: 'library',
        },
      ],
      codeblock: {
        title: 'Extension.jsx',
        tabs: [
          {
            code: './examples/ui-components.example.jsx',
            language: 'jsx',
          },
        ],
      },
      initialLanguage: 'jsx',
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
                code: './examples/custom-protocols/customer-account-link.example.html',
                language: 'jsx',
              },
            ],
          },
          initialLanguage: 'jsx',
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
                code: './examples/custom-protocols/relative-urls-link.example.html',
                language: 'jsx',
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
                code: './examples/custom-protocols/extension-link.example.html',
                language: 'jsx',
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
You can’t override the CSS for UI components. The customer account UI will always render the merchant’s own branding.

Customer account UI extensions don’t have access to the real customer account DOM and can’t render arbitrary HTML such as \`<div>\` elements or \`<script>\` tags, etc. They can only render custom HTML elements provided by Shopify.
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
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
As of \`2025-10\`, UI extensions have the following limitations:
- **File size limit**: Extensions are limited to a maximum of 64 KB when deployed. This limit helps ensure fast loading times and optimal performance for customers.
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
          name: 'Build metafield writes into extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/build/customer-accounts/metafields',
          type: 'blocks',
        },
        {
          name: 'Build pre-auth order status page extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/build/customer-accounts/pre-auth-order-status-page-extensions/build-pre-auth-order-status-page-extensions',
          type: 'blocks',
        },
        {
          name: 'Localize extensions',
          subtitle: 'Tutorial',
          url: '/docs/apps/build/customer-accounts/localization/localize',
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
