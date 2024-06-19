import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Admin UI extensions',
  description:
    'Admin UI extensions make it possible to surface contextual app functionality within the Shopify Admin interface.',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  id: 'admin-extensions',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'overview',
      title: 'Overview',
      image: 'action-extension-example.gif',
      sectionContent: 'Extend the Shopify Admin with UI Extensions.',
      sectionNotice: [
        {
          title: 'Developer preview',
          sectionContent:
            'Admin UI block extensions are currently in developer preview. You can only render them while developing locally on a development store.',
          type: 'beta',
        },
      ],
      sectionCard: [
        {
          name: 'Get started building your first admin extension',
          subtitle: 'Tutorial',
          url: '#getting-started',
          type: 'tutorial',
        },
        {
          subtitle: 'Component APIs',
          name: 'See all available components',
          url: '/docs/api/admin-extensions/components',
          type: 'blocks',
        },
        {
          subtitle: 'Reference',
          name: 'View a list of available extension targets',
          url: '/docs/api/admin-extensions/api/extension-targets',
          type: 'app',
        },
        {
          subtitle: 'App authentication',
          name: "Make authenticated requests to your app's backend",
          url: '#app-authentication',
          type: 'tool',
        },
        {
          subtitle: 'Direct API access',
          name: 'Access the Shopify GraphQL API directly',
          url: '#direct-api-access',
          type: 'tool',
        },
        {
          subtitle: 'Custom protocols',
          name: 'Easily construct URLs to navigate to common locations',
          url: '#custom-protocols',
          type: 'gear',
        },
        {
          subtitle: 'UI reference',
          name: 'Figma UI Kit',
          url: 'https://www.figma.com/community/file/1265417558571498993',
          type: 'figma',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'getting-started',
      sectionContent:
        'Use the Shopify CLI to [generate a new extension](https://shopify.dev/apps/tools/cli/commands#generate-extension) within your app.\n\nIf you already have a Shopify app, you can skip right to the last command shown here.',
      title: 'Getting Started',
      codeblock: {
        title: 'Generate an extension',
        tabs: [
          {
            code: './examples/getting-started.sh',
            language: 'bash',
            title: 'CLI',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'App Authentication',
      sectionContent:
        "Admin UI extensions can also make authenticated calls to your app's backend. When you use `fetch()` to make a request to your app's configured auth domain or any of its subdomains, an `Authorization` header is automatically added with a Shopify [OpenID Connect ID Token](https://shopify.dev/docs/api/app-bridge-library/reference/id-token). There's no need to manually manage session tokens.\n\nRelative URLs passed to `fetch()` are resolved against your app's `app_url`. This means if your app's backend is on the same domain as your `app_url`, you can make requests to it using `fetch('/path')`.",
      anchorLink: 'app-authentication',
      codeblock: {
        title: "Make requests to your app's backend",
        tabs: [
          {
            code: './examples/authenticated-fetch.jsx',
            language: 'tsx',
            title: 'Get Product Data',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Direct API access',
      sectionContent:
        "You can make Shopify Admin API requests directly from your extension using the [query API](/docs/api/admin-extensions/api/standard-api#standardapi-propertydetail-query) or the standard [web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch)!\n\nAny `fetch()` calls to Shopify's Admin GraphQL API from your extension are automatically authenticated by default. They're fast too, since requests are handled directly by Shopify.\n\nDirect API requests use [Online access](https://shopify.dev/docs/apps/build/authentication-authorization/access-token-types/online-access-tokens) mode. This means Direct API calls are restricted to the scopes available to the user that's using the extension. If your extension needs to use the offline access mode, you should make requests using your app's backend.",
      anchorLink: 'direct-api-access',
      codeblock: {
        title: 'Query Shopify data',
        tabs: [
          {
            code: './examples/direct-api-fetch.jsx',
            language: 'tsx',
            title: 'Fetch Product data',
          },
          {
            code: './examples/direct-api-query.jsx',
            language: 'tsx',
            title: 'Query Product data',
          },
        ],
      },
      sectionCard: [
        {
          name: 'Learn more about access scopes',
          subtitle: 'Developer guide',
          url: '/docs/api/usage/access-scopes',
          type: 'information',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Custom Protocols',
      sectionContent:
        'Custom protocols make it easier to navigate to common locations, and construct URLs.',
      anchorLink: 'custom-protocols',
      accordionContent: [
        {
          title: 'Shopify Protocol',
          description:
            'Use the `shopify:admin` protocol when you want to construct a URL with a root of the Shopify Admin.',
          codeblock: {
            title: 'shopify:admin',
            tabs: [
              {
                title: 'Link to Product Page',
                language: 'tsx',
                code: './examples/link-to-product-page.jsx',
              },
              {
                title: 'Fetch data',
                language: 'ts',
                code: './examples/fetch-data.js',
              },
            ],
          },
        },
        {
          title: 'App Protocol',
          description:
            'Use the `app:` protocol to construct a URL for your app. Shopify will handle constructing the base URL for your app. This works for both embedded and non-embedded apps.',
          codeblock: {
            title: 'app:',
            tabs: [
              {
                title: 'Link to Settings',
                language: 'tsx',
                code: './examples/link-to-settings.jsx',
              },
            ],
          },
        },
        {
          title: 'Extension Protocol',
          description:
            'Triggers an action extension from a block extension using the `extension:` protocol. The `extensionTarget` is the target of the action extension. The handle is the handle of the action extension that will be opened.',
          codeblock: {
            title: 'extension:',
            tabs: [
              {
                title: 'Trigger Action Extension from a Block extension',
                language: 'tsx',
                code: './examples/link-to-action.jsx',
              },
            ],
          },
        },
        {
          title: 'Relative Urls',
          description:
            'Relative urls are relative to your app and are useful when you want to link to a route within your app. This works for both embedded and non-embedded apps.',
          codeblock: {
            title: '/relative/urls',
            tabs: [
              {
                title: 'Link to route in your app',
                language: 'tsx',
                code: './examples/link-to-route.jsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Generic',
      title: 'Deploying',
      anchorLink: 'deploying',
      sectionContent:
        'Use the Shopify CLI to [deploy your app and its extensions](https://shopify.dev/docs/apps/deployment/extension).',
      codeblock: {
        title: 'Deploy an extension',
        tabs: [
          {
            code: './examples/deploy.sh',
            language: 'bash',
            title: 'CLI',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Security',
      anchorLink: 'security',
      sectionContent:
        'UI Extensions run on a different origin than the Shopify Admin. For network calls to succeed, your server must support [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for the origin `https://extensions.shopifycdn.com`.\n\nIf you have a custom [`Access-Control-Allow-Origin` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) set, you must include `https://extensions.shopifycdn.com` in the list of allowed origins.\n\nIf you are using the [Shopify App Remix Template](https://github.com/Shopify/shopify-app-template-remix), this is done automatically for you.',
    },
  ],
};

export default data;
