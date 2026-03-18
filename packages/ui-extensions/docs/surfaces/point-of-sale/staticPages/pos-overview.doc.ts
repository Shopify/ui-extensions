import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'POS UI extensions',
  description: `The UI Extensions library enables individuals to build extensions that use interface elements and behaviors that mirror the look and feel of the POS retail experience. These elements render natively, providing the performance and accessibility inherent to a native app.`,
  id: 'pos-ui-extensions',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'api-versioning',
      title: 'API versioning',
      sectionContent: `POS UI extensions are built on a versioned API that receives regular updates with new features, improvements, and additional targets. We recommend using the latest supported API version to access the most current capabilities and ensure optimal compatibility with POS devices.

You can track new releases and update your extensions by referencing the [developer changelog](/changelog).`,
    },
    {
      type: 'Generic',
      anchorLink: 'overview',
      title: 'Overview',
      sectionContent: 'Extend the Shopify POS with UI Extensions.',
      sectionCard: [
        {
          subtitle: 'Extension targets',
          name: 'See all available extension targets',
          url: '/docs/api/pos-ui-extensions/targets',
          type: 'pickaxe-1',
        },
        {
          subtitle: 'APIs',
          name: 'See all available APIs',
          url: '/docs/api/pos-ui-extensions/apis',
          type: 'pickaxe-2',
        },
        {
          subtitle: 'Components',
          name: 'See all available components',
          url: '/docs/api/pos-ui-extensions/web-components',
          type: 'blocks',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'getting-started',
      title: 'Getting Started',
      sectionContent: 'Get started with POS UI Extensions with Shopify CLI.',
      sectionCard: [
        {
          name: 'Getting started guide',
          subtitle: 'Set up your development environment',
          url: '/docs/apps/build/pos/getting-started',
          type: 'blocks',
        },
      ],
      sectionNotice: [
        {
          title: 'AI development assistance',
          type: 'note',
          sectionContent: `Connect your AI assistant to the [Shopify Dev MCP](/docs/apps/build/devmcp) to build POS UI extensions. Try asking "Build a new POS UI extension ..."`,
        },
      ],
    },
    {
      type: 'Generic',
      title: 'App Authentication',
      sectionContent:
        "POS UI extensions can also make authenticated calls to your app's backend. When you use `fetch()` to make a request to your app's configured auth domain or any of its subdomains, an `Authorization` header is automatically added with a Shopify [OpenID Connect ID Token (formerly known as a Session Token)](/docs/api/app-bridge-library/reference/id-token). There's no need to manually manage ID tokens.\n\nRelative URLs passed to `fetch()` are resolved against your app's `app_url`. This means if your app's backend is on the same domain as your `app_url`, you can make requests to it using `fetch('/path')`.\n\nIf you need to make requests to a different domain, you can use the [`session.getSessionToken()` method](apis/session-api#sessionapi-propertydetail-getsessiontoken) to retrieve the ID token and manually add it to your request headers.\n\n**Important**: ID tokens are only returned for authenticated users who are permitted to use your app. When the authenticated user (the user that logged into Shopify POS with their email address) doesn't have the correct app permission enabled for your app, the token will be null. This is irrelevant of which POS Staff member is pinned in, as those are not authenticated users. For more information on configuring app permissions, see the [Shopify app permissions documentation](https://help.shopify.com/en/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).",
      anchorLink: 'app-authentication',
      codeblock: {
        title: "Make requests to your app's backend",
        tabs: [
          {
            code: './examples/authenticated-fetch/authenticated-fetch.jsx',
            language: 'jsx',
            title: 'JSX',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Direct API access',
      sectionNotice: [
        {
          title: 'Access scopes',
          type: 'note',
          sectionContent: `Be sure to declare all required access scopes in your app's TOML file. For local development, access scopes are only registered or updated when the app is deployed and installed on your test store.`,
        },
      ],
      sectionContent:
        "You can make Shopify Admin API requests directly from your extension using the standard [web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch)!\n\nAny `fetch()` calls from your extension to Shopify's Admin GraphQL API are automatically authenticated by default. These calls are fast too, because Shopify handles requests directly.\n\nDirect API requests use [online access](https://shopify.dev/docs/apps/build/authentication-authorization/access-token-types/online-access-tokens) mode by default.",
      anchorLink: 'direct-api-access',

      codeblock: {
        title: 'Query Shopify data directly',
        tabs: [
          {
            code: './examples/direct-api-access/direct-api-access.jsx',
            language: 'jsx',
            title: 'JSX',
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
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
As of \`2025-10\`, UI extensions have the following limitations:
- **File size limit**: Extensions are limited to a maximum of 64 KB when deployed. This limit helps ensure fast loading times and optimal performance for POS devices.
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
  ],
};

export default data;
